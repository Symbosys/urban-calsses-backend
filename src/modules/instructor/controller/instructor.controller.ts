import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse, ErrorResponse } from "../../../utils/response.util.js";
import { createInstructorValidation, updateInstructorValidation } from "../validation/instructor.validation.js";
import { removeUndefined } from "../../../utils/utils.js";
import type { Prisma } from "../../../../generated/prisma/client.js";
import { uploadToCloudinary, deleteFromCloudinary } from "../../../config/cloudinary.js";

/**
 * @desc    Get all instructors with pagination and search
 * @route   GET /api/v1/instructors
 * @access  Public
 */
export const getAllInstructors = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const search = (req.query.search as string) || "";
  const skip = (page - 1) * limit;

  const where: Prisma.InstructorWhereInput = {
    AND: [
      {
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { email: { contains: search, mode: "insensitive" } },
          { specialization: { contains: search, mode: "insensitive" } },
        ],
      },
    ],
  };

  const [instructors, total] = await Promise.all([
    prisma.instructor.findMany({
      where,
      skip,
      take: limit,
      include: {
        _count: {
          select: { courses: true },
        },
      },
      orderBy: {
        name: "asc",
      },
    }),
    prisma.instructor.count({ where }),
  ]);

  return SuccessResponse(res, "Instructors fetched successfully", {
    instructors,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  });
});

/**
 * @desc    Get instructor by ID with courses
 * @route   GET /api/v1/instructors/:id
 * @access  Public
 */
export const getInstructorById = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;

  const instructor = await prisma.instructor.findUnique({
    where: { id },
    include: {
      account: true,
      courses: {
        include: {
          course: true,
        },
      },
    },
  });

  if (!instructor) {
    return next(new ErrorResponse("Instructor not found", 404));
  }

  return SuccessResponse(res, "Instructor fetched successfully", { instructor });
});

/**
 * @desc    Create a new instructor (Admin)
 * @route   POST /api/v1/instructors
 * @access  Admin
 */
export const createInstructor = asyncHandler(async (req, res, next) => {
  const validation = createInstructorValidation.parse(req.body);

  // Check if email already exists
  const existing = await prisma.instructor.findUnique({
    where: { email: validation.email },
  });

  if (existing) {
    return next(new ErrorResponse("Instructor email already exists", 400));
  }

  let avatarData = null;
  if (req.file) {
    const { public_id, secure_url } = await uploadToCloudinary(req.file.buffer, "instructors");
    avatarData = { public_id, secure_url };
  }

  const instructor = await prisma.instructor.create({
    data: {
      ...validation,
      avatar: avatarData,
      account: {
        create: {
          role: "INSTRUCTOR",
        },
      },
    } as any,
    include: {
      account: true,
    },
  });

  return SuccessResponse(res, "Instructor created successfully", { instructor }, 201);
});

/**
 * @desc    Update instructor details
 * @route   PUT /api/v1/instructors/:id
 * @access  Admin/Self
 */
export const updateInstructor = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;
  const validation = updateInstructorValidation.parse(req.body);

  const existing = await prisma.instructor.findUnique({ where: { id } });
  if (!existing) {
    return next(new ErrorResponse("Instructor not found", 404));
  }

  let avatarData = existing.avatar;
  if (req.file) {
    // Delete previous avatar if exists
    if (existing.avatar && (existing.avatar as any).public_id) {
      await deleteFromCloudinary((existing.avatar as any).public_id);
    }
    const { public_id, secure_url } = await uploadToCloudinary(req.file.buffer, "instructors");
    avatarData = { public_id, secure_url };
  }

  const updatedInstructor = await prisma.instructor.update({
    where: { id },
    data: {
      ...removeUndefined(validation),
      avatar: avatarData,
    } as any,
    include: {
      account: true,
    },
  });

  return SuccessResponse(res, "Instructor updated successfully", { instructor: updatedInstructor });
});

/**
 * @desc    Delete instructor
 * @route   DELETE /api/v1/instructors/:id
 * @access  Admin
 */
export const deleteInstructor = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;

  const instructor = await prisma.instructor.findUnique({ where: { id } });
  if (!instructor) {
    return next(new ErrorResponse("Instructor not found", 404));
  }

  // Deleting account will cascade to instructor
  await prisma.account.delete({
    where: { id: instructor.accountId },
  });

  return SuccessResponse(res, "Instructor deleted successfully", null);
});
