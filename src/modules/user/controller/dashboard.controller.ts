import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse } from "../../../utils/response.util.js";

/**
 * @desc    Get Student Dashboard Stats
 * @route   GET /api/v1/user/dashboard
 * @access  Student
 */
export const getStudentDashboardMetrics = asyncHandler(async (req: any, res, next) => {
  const userId = req.user.id;

  const [
    enrolledCoursesCount,
    enrollments,
  ] = await Promise.all([
    prisma.enrollment.count({ where: { userId, status: "ACTIVE" } }),
    prisma.enrollment.findMany({
      where: { userId, status: "ACTIVE" },
      include: {
        course: {
          select: {
            id: true,
            title: true,
            level: true,
            price: true,
            thumbnail: true,
          }
        }
      }
    })
  ]);

  // Determine study time (dummy or aggregated from lesson progress)
  const learningHours = 124; // Static for now, can be calculated via progress tracking if available
  const certificatesCount = 0; // Assuming certificates model doesn't exist yet

  // Map courses to be returned in frontend
  const courses = enrollments.map((enrollment: any) => ({
    id: enrollment.course.id,
    title: enrollment.course.title,
    level: enrollment.course.level,
    progress: 45, // default static progress, update with actual progress later
  }));

  return SuccessResponse(res, "Student Dashboard Metrics Fetched", {
    enrolledCoursesCount,
    learningHours,
    certificatesCount,
    courses
  });
});
