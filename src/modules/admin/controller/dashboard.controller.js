import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse } from "../../../utils/response.util.js";
/**
 * @desc    Get dashboard statistics
 * @route   GET /api/v1/admin/dashboard/stats
 * @access  Admin
 */
export const getDashboardStats = asyncHandler(async (req, res, next) => {
    const [totalStudents, totalInstructors, totalCourses, totalOrders, revenueData, recentOrders, recentUsers] = await Promise.all([
        prisma.user.count(),
        prisma.instructor.count(),
        prisma.course.count(),
        prisma.order.count({ where: { status: "COMPLETED" } }),
        prisma.order.aggregate({
            where: { status: "COMPLETED" },
            _sum: { totalAmount: true }
        }),
        prisma.order.findMany({
            take: 5,
            orderBy: { createdAt: "desc" },
            include: {
                user: { select: { name: true, email: true } },
                course: { select: { title: true } }
            }
        }),
        prisma.user.findMany({
            take: 5,
            orderBy: { id: "desc" },
            select: { name: true, email: true }
        })
    ]);
    return SuccessResponse(res, "Dashboard stats fetched successfully", {
        stats: {
            totalStudents,
            totalInstructors,
            totalCourses,
            totalOrders,
            totalRevenue: revenueData._sum.totalAmount || 0
        },
        recentOrders,
        recentUsers
    });
});
//# sourceMappingURL=dashboard.controller.js.map