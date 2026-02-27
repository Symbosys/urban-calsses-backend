import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse, ErrorResponse } from "../../../utils/response.util.js";
import { updateUserValidation } from "../validation/user.validation.js";
/**
 * @desc    Get all users with pagination and optional search
 * @route   GET /api/v1/users
 * @access  Admin
 */
export const getAllUsers = asyncHandler(async (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || "";
    const skip = (page - 1) * limit;
    const where = {
        OR: [
            { name: { contains: search, mode: "insensitive" } },
            { email: { contains: search, mode: "insensitive" } },
            { phone: { contains: search, mode: "insensitive" } },
        ],
    };
    const [users, total] = await Promise.all([
        prisma.user.findMany({
            where,
            skip,
            take: limit,
            include: {
                account: {
                    select: {
                        id: true,
                        role: true,
                        createdAt: true,
                        updatedAt: true,
                    },
                },
            },
            orderBy: {
                id: "desc",
            },
        }),
        prisma.user.count({ where }),
    ]);
    return SuccessResponse(res, "Users fetched successfully", {
        users,
        pagination: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        },
    });
});
/**
 * @desc    Get user by ID
 * @route   GET /api/v1/users/:id
 * @access  Admin
 */
export const getUserById = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const user = await prisma.user.findUnique({
        where: { id },
        include: {
            account: true,
            goals: {
                include: {
                    subCategory: true
                }
            }
        },
    });
    if (!user) {
        return next(new ErrorResponse("User not found", 404));
    }
    return SuccessResponse(res, "User fetched successfully", { user });
});
/**
 * @desc    Update user
 * @route   PUT /api/v1/users/:id
 * @access  Admin/Self
 */
export const updateUser = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const validation = updateUserValidation.parse(req.body);
    // Check if user exists
    const existingUser = await prisma.user.findUnique({ where: { id } });
    if (!existingUser) {
        return next(new ErrorResponse("User not found", 404));
    }
    // To satisfy exactOptionalPropertyTypes, we filter out undefined values
    const updateData = {};
    if (validation.name !== undefined)
        updateData.name = validation.name;
    if (validation.phone !== undefined)
        updateData.phone = validation.phone;
    if (validation.isBlocked !== undefined)
        updateData.isBlocked = validation.isBlocked;
    const updatedUser = await prisma.user.update({
        where: { id },
        data: updateData,
        include: {
            account: true,
        },
    });
    return SuccessResponse(res, "User updated successfully", { user: updatedUser });
});
/**
 * @desc    Delete user
 * @route   DELETE /api/v1/users/:id
 * @access  Admin
 */
export const deleteUser = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
        return next(new ErrorResponse("User not found", 404));
    }
    // Deleting the Account will cascade and delete the User due to onDelete: Cascade in schema
    await prisma.account.delete({
        where: { id: user.accountId },
    });
    return SuccessResponse(res, "User and associated account deleted successfully", null);
});
//# sourceMappingURL=user.controller.js.map