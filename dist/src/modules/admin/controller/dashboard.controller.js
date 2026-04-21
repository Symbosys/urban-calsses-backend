import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse } from "../../../utils/response.util.js";
/**
 * @desc    Get Admin Dashboard Stats
 * @route   GET /api/v1/admin/dashboard
 * @access  Admin
 */
export const getAdminDashboardMetrics = asyncHandler(async (req, res, next) => {
    const [totalStudents, activeCourses, activeInstructors, revenueRows] = await Promise.all([
        prisma.user.count({ where: { account: { role: "STUDENT" } } }),
        prisma.course.count({ where: { status: "PUBLISHED" } }),
        prisma.user.count({ where: { account: { role: "INSTRUCTOR" } } }),
        prisma.order.aggregate({
            _sum: { amount: true },
            where: { status: "COMPLETED" }
        })
    ]);
    const totalRevenue = revenueRows._sum.amount || 0;
    // Recent activity (dummy or real)
    const recentActivities = [
        { name: "John Doe", action: "enrolled in", course: "Web Development Bootcamp", time: "2 minutes ago" },
        { name: "Sarah Smith", action: "purchased", course: "Mastering UI Design", time: "1 hour ago" },
    ];
    return SuccessResponse(res, "Admin Dashboard Metrics Fetched", {
        stats: {
            totalRevenue,
            totalStudents,
            activeCourses,
            activeInstructors
        },
        recentActivities
    });
});
//# sourceMappingURL=dashboard.controller.js.map