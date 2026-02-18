import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse, ErrorResponse } from "../../../utils/response.util.js";
import { CourseStatus } from "../../../../generated/prisma/client.js";

/**
 * @desc    Get all courses with detailed status (Review/Draft/Published)
 * @route   GET /api/v1/admin/courses
 * @access  Admin
 */
export const getAllCoursesAdmin = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 20;
  const skip = (page - 1) * limit;
  const status = req.query.status as CourseStatus;

  const where: any = {};
  if (status) where.status = status;

  const [courses, total] = await Promise.all([
    prisma.course.findMany({
      where,
      include: {
        subCategory: { select: { name: true } },
        instructors: { include: { instructor: { select: { name: true } } } }
      },
      skip,
      take: limit,
      orderBy: { createdAt: "desc" }
    }),
    prisma.course.count({ where })
  ]);

  return SuccessResponse(res, "Courses fetched successfully", {
    courses,
    pagination: { total, page, limit, totalPages: Math.ceil(total / limit) }
  });
});

/**
 * @desc    Verify/Approve a course
 * @route   PATCH /api/v1/admin/courses/:id/status
 * @access  Admin
 */
export const updateCourseStatus = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;
  const { status } = req.body; // DRAFT, UNDER_REVIEW, PUBLISHED, ARCHIVED

  if (!Object.values(CourseStatus).includes(status)) {
    return next(new ErrorResponse("Invalid status value", 400));
  }

  const course = await prisma.course.findUnique({ where: { id } });
  if (!course) {
    return next(new ErrorResponse("Course not found", 404));
  }

  const updatedCourse = await prisma.course.update({
    where: { id },
    data: { status }
  });

  return SuccessResponse(res, `Course status updated to ${status}`, { course: updatedCourse });
});

/**
 * @desc    Toggle feature status of a course
 * @route   PATCH /api/v1/admin/courses/:id/feature
 * @access  Admin
 */
export const toggleCourseFeature = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;

  const course = await prisma.course.findUnique({ where: { id } });
  if (!course) {
    return next(new ErrorResponse("Course not found", 404));
  }

  const updatedCourse = await prisma.course.update({
    where: { id },
    data: { isFeatured: !course.isFeatured }
  });

  return SuccessResponse(res, `Course featured status: ${updatedCourse.isFeatured}`, { course: updatedCourse });
});
