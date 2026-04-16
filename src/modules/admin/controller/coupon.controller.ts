import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse, ErrorResponse } from "../../../utils/response.util.js";
import { couponValidation, updateCouponValidation } from "../validation/coupon.validation.js";
import { removeUndefined } from "../../../utils/utils.js";

/**
 * @desc    Get all coupons
 * @route   GET /api/v1/admin/coupons
 * @access  Admin
 */
export const getAllCoupons = asyncHandler(async (req, res, next) => {
    const coupons = await prisma.coupon.findMany({
        orderBy: { createdAt: "desc" },
    });
    return SuccessResponse(res, "Coupons fetched successfully", { coupons });
});

/**
 * @desc    Get coupon by ID
 * @route   GET /api/v1/admin/coupons/:id
 * @access  Admin
 */
export const getCouponById = asyncHandler(async (req, res, next) => {
    const id = req.params.id as string;
    const coupon = await prisma.coupon.findUnique({ where: { id } });
    if (!coupon)
        return next(new ErrorResponse("Coupon not found", 404));
    return SuccessResponse(res, "Coupon fetched successfully", { coupon });
});

/**
 * @desc    Create a coupon
 * @route   POST /api/v1/admin/coupons
 * @access  Admin
 */
export const createCoupon = asyncHandler(async (req, res, next) => {
    const validation = couponValidation.parse(req.body);
    // Check for duplicate code
    const existing = await prisma.coupon.findUnique({ where: { code: validation.code } });
    if (existing)
        return next(new ErrorResponse("A coupon with this code already exists", 409));
    const coupon = await prisma.coupon.create({
        data: {
            ...validation,
            maxUses: (validation.maxUses as any) || null,
            minOrderAmount: validation.minOrderAmount ?? 0,
        } as any,
    });
    return SuccessResponse(res, "Coupon created successfully", { coupon }, 201);
});

/**
 * @desc    Update a coupon
 * @route   PATCH /api/v1/admin/coupons/:id
 * @access  Admin
 */
export const updateCoupon = asyncHandler(async (req, res, next) => {
    const id = req.params.id as string;
    const existing = await prisma.coupon.findUnique({ where: { id } });
    if (!existing)
        return next(new ErrorResponse("Coupon not found", 404));
    const validation = updateCouponValidation.parse(req.body);
    // Check for duplicate code if code is being changed
    if (validation.code && validation.code !== existing.code) {
        const codeConflict = await prisma.coupon.findUnique({ where: { code: validation.code } });
        if (codeConflict)
            return next(new ErrorResponse("A coupon with this code already exists", 409));
    }
    const updateData = removeUndefined(validation);
    const coupon = await prisma.coupon.update({
        where: { id },
        data: updateData as any,
    });
    return SuccessResponse(res, "Coupon updated successfully", { coupon });
});

/**
 * @desc    Delete a coupon
 * @route   DELETE /api/v1/admin/coupons/:id
 * @access  Admin
 */
export const deleteCoupon = asyncHandler(async (req, res, next) => {
    const id = req.params.id as string;
    const existing = await prisma.coupon.findUnique({ where: { id } });
    if (!existing)
        return next(new ErrorResponse("Coupon not found", 404));
    await prisma.coupon.delete({ where: { id } });
    return SuccessResponse(res, "Coupon deleted successfully", null);
});
