import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse, ErrorResponse } from "../../../utils/response.util.js";

/**
 * @desc    Get all users (Students/Instructors/Admins)
 * @route   GET /api/v1/admin/users
 * @access  Admin
 */
export const getAllUsersAdmin = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const skip = (page - 1) * limit;
  const role = req.query.role as any;

  const where: any = {};
  if (role) {
    where.account = { role };
  }

  const [users, total] = await Promise.all([
    prisma.user.findMany({
      where,
      include: {
        account: { select: { id: true, role: true, createdAt: true } }
      },
      skip,
      take: limit,
      orderBy: { id: "desc" }
    }),
    prisma.user.count({ where })
  ]);

  return SuccessResponse(res, "Users fetched successfully", {
    users,
    pagination: { total, page, limit, totalPages: Math.ceil(total / limit) }
  });
});

/**
 * @desc    Verify or Unverify a user/instructor
 * @route   PATCH /api/v1/admin/users/:id/verify
 * @access  Admin
 */
export const toggleUserVerification = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;

  const user = await prisma.user.findUnique({ where: { id } });
  const instructor = await prisma.instructor.findUnique({ where: { id } });

  if (user) {
    const updated = await prisma.user.update({
      where: { id },
      data: { isVerified: !user.isVerified }
    });
    return SuccessResponse(res, `User verification status: ${updated.isVerified}`, { user: updated });
  } else if (instructor) {
    const updated = await prisma.instructor.update({
      where: { id },
      data: { isVerified: !instructor.isVerified }
    });
    return SuccessResponse(res, `Instructor verification status: ${updated.isVerified}`, { instructor: updated });
  }

  return next(new ErrorResponse("User/Instructor not found", 404));
});

/**
 * @desc    Block or Unblock a user/instructor
 * @route   PATCH /api/v1/admin/users/:id/block
 * @access  Admin
 */
export const toggleUserBlock = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;

  const user = await prisma.user.findUnique({ where: { id } });
  const instructor = await prisma.instructor.findUnique({ where: { id } });

  if (user) {
    const updated = await prisma.user.update({
      where: { id },
      data: { isBlocked: !user.isBlocked }
    });
    return SuccessResponse(res, `User block status: ${updated.isBlocked}`, { user: updated });
  } else if (instructor) {
    const updated = await prisma.instructor.update({
      where: { id },
      data: { isBlocked: !instructor.isBlocked }
    });
    return SuccessResponse(res, `Instructor block status: ${updated.isBlocked}`, { instructor: updated });
  }

  return next(new ErrorResponse("User/Instructor not found", 404));
});
