import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse, ErrorResponse } from "../../../utils/response.util.js";
import { createCouponValidation, updateCouponValidation } from "../validation/coupon.validation.js";
/**
 * @desc    Create a new coupon
 * @route   POST /api/v1/admin/coupons
 * @access  Admin
 */
export const createCoupon = asyncHandler(async (req, res, next) => {
    const validation = createCouponValidation.parse(req.body);
    const existing = await prisma.coupon.findUnique({ where: { code: validation.code } });
    if (existing) {
        return next(new ErrorResponse("Coupon code already exists", 400));
    }
    const createData = {
        code: validation.code,
        discountType: validation.discountType,
        discountValue: validation.discountValue,
        validFrom: validation.validFrom,
        validTill: validation.validTill
    };
    if (validation.description !== undefined)
        createData.description = validation.description;
    if (validation.minOrderAmount !== undefined)
        createData.minOrderAmount = validation.minOrderAmount;
    if (validation.maxUses !== undefined)
        createData.maxUses = validation.maxUses;
    if (validation.isActive !== undefined)
        createData.isActive = validation.isActive;
    const coupon = await prisma.coupon.create({
        data: createData
    });
    return SuccessResponse(res, "Coupon created successfully", { coupon });
});
/**
 * @desc    Get all coupons
 * @route   GET /api/v1/admin/coupons
 * @access  Admin
 */
export const getAllCoupons = asyncHandler(async (req, res, next) => {
    const coupons = await prisma.coupon.findMany({
        orderBy: { createdAt: "desc" }
    });
    return SuccessResponse(res, "Coupons fetched successfully", { coupons });
});
/**
 * @desc    Update a coupon
 * @route   PATCH /api/v1/admin/coupons/:id
 * @access  Admin
 */
export const updateCoupon = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const validation = updateCouponValidation.parse(req.body);
    const existing = await prisma.coupon.findUnique({ where: { id } });
    if (!existing) {
        return next(new ErrorResponse("Coupon not found", 404));
    }
    const updateData = {};
    if (validation.description !== undefined)
        updateData.description = validation.description;
    if (validation.discountValue !== undefined)
        updateData.discountValue = validation.discountValue;
    if (validation.minOrderAmount !== undefined)
        updateData.minOrderAmount = validation.minOrderAmount;
    if (validation.maxUses !== undefined)
        updateData.maxUses = validation.maxUses;
    if (validation.validFrom !== undefined)
        updateData.validFrom = validation.validFrom;
    if (validation.validTill !== undefined)
        updateData.validTill = validation.validTill;
    if (validation.isActive !== undefined)
        updateData.isActive = validation.isActive;
    const updatedCoupon = await prisma.coupon.update({
        where: { id },
        data: updateData
    });
    return SuccessResponse(res, "Coupon updated successfully", { coupon: updatedCoupon });
});
/**
 * @desc    Delete a coupon
 * @route   DELETE /api/v1/admin/coupons/:id
 * @access  Admin
 */
export const deleteCoupon = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const existing = await prisma.coupon.findUnique({ where: { id } });
    if (!existing) {
        return next(new ErrorResponse("Coupon not found", 404));
    }
    await prisma.coupon.delete({ where: { id } });
    return SuccessResponse(res, "Coupon deleted successfully", null);
});
//# sourceMappingURL=coupon.controller.js.map