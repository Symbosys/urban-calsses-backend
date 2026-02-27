import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse, ErrorResponse } from "../../../utils/response.util.js";
import { createCourseValidation, updateCourseValidation } from "../validation/course.validation.js";
import { slugify, removeUndefined } from "../../../utils/utils.js";
import type { Prisma } from "../../../../generated/prisma/client.js";
import { uploadToCloudinary, deleteFromCloudinary } from "../../../config/cloudinary.js";

/**
 * @desc    Create a new course
 * @route   POST /api/v1/courses
 * @access  Admin/Instructor
 */
export const createCourse = asyncHandler(async (req, res, next) => {
  const validation = createCourseValidation.parse(req.body);

  // Generate unique slug
  let slug = slugify(validation.title);
  const existingSlug = await prisma.course.findUnique({ where: { slug } });
  if (existingSlug) {
    slug = `${slug}-${Math.floor(Math.random() * 1000)}`;
  }

  let thumbnailData = null;
  if (req.file) {
    const { public_id, secure_url } = await uploadToCloudinary(req.file.buffer, "courses");
    thumbnailData = { public_id, secure_url };
  }

  const { instructorIds, tags, ...courseData } = validation;

  const course = await prisma.course.create({
    data: {
      ...removeUndefined(courseData),
      slug,
      thumbnail: thumbnailData,
      instructors: instructorIds?.length
        ? {
            create: instructorIds.map((instructorId: string) => ({
              instructorId,
            })),
          }
        : undefined,
      tags: tags?.length
        ? {
            create: tags.map((tag: string) => ({
              name: tag,
            })),
          }
        : undefined,
    } as any,
    include: {
      subCategory: true,
      instructors: {
        include: {
          instructor: true,
        },
      },
      tags: true,
    },
  });

  return SuccessResponse(res, "Course created successfully", { course }, 201);
});

/**
 * @desc    Get all courses with pagination, search and filters
 * @route   GET /api/v1/courses
 * @access  Public
 */
export const getAllCourses = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const search = (req.query.search as string) || "";
  const subCategoryId = req.query.subCategoryId as string;
  const categoryId = req.query.categoryId as string;
  const status = req.query.status as any;
  const level = req.query.level as any;
  const isFeatured = req.query.isFeatured === "true" ? true : undefined;

  const skip = (page - 1) * limit;

  const where: Prisma.CourseWhereInput = {
    AND: [
      {
        OR: [
          { title: { contains: search, mode: "insensitive" } },
          { shortDescription: { contains: search, mode: "insensitive" } },
        ],
      },
      subCategoryId ? { subCategoryId } : {},
      categoryId ? { subCategory: { categoryId } } : {},
      status ? { status } : {},
      level ? { level } : {},
      isFeatured !== undefined ? { isFeatured } : {},
    ],
  };

  const [courses, total] = await Promise.all([
    prisma.course.findMany({
      where,
      skip,
      take: limit,
      include: {
        subCategory: {
          include: {
            category: true,
          },
        },
        instructors: {
          include: {
            instructor: true,
          },
        },
        _count: {
          select: {
            enrollments: true,
            subjects: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    }),
    prisma.course.count({ where }),
  ]);

  return SuccessResponse(res, "Courses fetched successfully", {
    courses,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  });
});

/**
 * @desc    Get course by ID
 * @route   GET /api/v1/courses/:id
 * @access  Public/Private
 */
export const getCourseById = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;

  const course = await prisma.course.findUnique({
    where: { id },
    include: {
      subCategory: {
        include: {
          category: true,
        },
      },
      instructors: {
        include: {
          instructor: true,
        },
      },
      subjects: {
        include: {
          sections: {
            include: {
              lessons: true,
            },
          },
        },
        orderBy: {
          order: "asc",
        },
      },
      tags: true,
    },
  });

  if (!course) {
    return next(new ErrorResponse("Course not found", 404));
  }

  return SuccessResponse(res, "Course fetched successfully", { course });
});

/**
 * @desc    Get course by slug
 * @route   GET /api/v1/courses/slug/:slug
 * @access  Public
 */
export const getCourseBySlug = asyncHandler(async (req, res, next) => {
  const { slug } = req.params;

  const course = await prisma.course.findUnique({
    where: { slug: slug as string },
    include: {
      subCategory: {
        include: {
          category: true,
        },
      },
      instructors: {
        include: {
          instructor: true,
        },
      },
      subjects: {
        include: {
          sections: {
            include: {
              lessons: {
                where: { isFree: true }, // Only free lessons in public view
              },
            },
          },
        },
        orderBy: {
          order: "asc",
        },
      },
      tags: true,
      _count: {
        select: {
          enrollments: true,
          reviews: true,
        },
      },
    },
  });

  if (!course) {
    return next(new ErrorResponse("Course not found", 404));
  }

  return SuccessResponse(res, "Course fetched successfully", { course });
});

/**
 * @desc    Update course
 * @route   PUT /api/v1/courses/:id
 * @access  Admin/Instructor
 */
export const updateCourse = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;
  const validation = updateCourseValidation.parse(req.body);

  const existingCourse = await prisma.course.findUnique({ where: { id } });
  if (!existingCourse) {
    return next(new ErrorResponse("Course not found", 404));
  }

  // Update slug if title changes
  let slug = existingCourse.slug;
  if (validation.title && validation.title !== existingCourse.title) {
    slug = slugify(validation.title);
    const slugExists = await prisma.course.findFirst({
      where: {
        slug,
        id: { not: id },
      },
    });
    if (slugExists) {
      slug = `${slug}-${Math.floor(Math.random() * 1000)}`;
    }
  }

  let thumbnailData = existingCourse.thumbnail;
  if (req.file) {
    // Delete previous thumbnail if exists
    if (existingCourse.thumbnail && (existingCourse.thumbnail as any).public_id) {
      await deleteFromCloudinary((existingCourse.thumbnail as any).public_id);
    }
    const { public_id, secure_url } = await uploadToCloudinary(req.file.buffer, "courses");
    thumbnailData = { public_id, secure_url };
  }

  const { instructorIds, tags, ...courseData } = validation;

  const updatedCourse = await prisma.course.update({
    where: { id },
    data: {
      ...removeUndefined(courseData),
      slug,
      thumbnail: thumbnailData,
      instructors:
        instructorIds !== undefined
          ? {
              deleteMany: {},
              create: instructorIds.map((instructorId: string) => ({
                instructorId,
              })),
            }
          : undefined,
      tags:
        tags !== undefined
          ? {
              deleteMany: {},
              create: tags.map((tag: string) => ({
                name: tag,
              })),
            }
          : undefined,
    } as any,
    include: {
      subCategory: true,
      instructors: {
        include: {
          instructor: true,
        },
      },
      tags: true,
    },
  });

  return SuccessResponse(res, "Course updated successfully", { course: updatedCourse });
});

/**
 * @desc    Delete course
 * @route   DELETE /api/v1/courses/:id
 * @access  Admin
 */
export const deleteCourse = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;

  const course = await prisma.course.findUnique({ where: { id } });
  if (!course) {
    return next(new ErrorResponse("Course not found", 404));
  }

  await prisma.course.delete({ where: { id } });

  return SuccessResponse(res, "Course deleted successfully", null);
});
