import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse, ErrorResponse } from "../../../utils/response.util.js";
import { bannerValidation, updateBannerValidation } from "../validation/banner.validation.js";
import { uploadToCloudinary, deleteFromCloudinary } from "../../../config/cloudinary.js";
/**
 * @desc    Get all banners
 * @route   GET /api/v1/admin/banners
 * @access  Public / Admin
 */
export const getAllBanners = asyncHandler(async (req, res, next) => {
    const banners = await prisma.banner.findMany({
        orderBy: { order: "asc" },
    });
    return SuccessResponse(res, "Banners fetched successfully", { banners });
});
/**
 * @desc    Create a new banner
 * @route   POST /api/v1/admin/banners
 * @access  Admin
 */
export const createBanner = asyncHandler(async (req, res, next) => {
    if (!req.file) {
        return next(new ErrorResponse("Banner image is required", 400));
    }
    const validation = bannerValidation.parse(req.body);
    const { public_id, secure_url } = await uploadToCloudinary(req.file.buffer, "banners");
    const banner = await prisma.banner.create({
        data: {
            ...validation,
            link: validation.link || null,
            image: { public_id, secure_url },
        },
    });
    return SuccessResponse(res, "Banner created successfully", { banner }, 201);
});
/**
 * @desc    Update a banner
 * @route   PATCH /api/v1/admin/banners/:id
 * @access  Admin
 */
export const updateBanner = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const existing = await prisma.banner.findUnique({ where: { id } });
    if (!existing)
        return next(new ErrorResponse("Banner not found", 404));
    const validation = updateBannerValidation.parse(req.body);
    let imageData = existing.image;
    if (req.file) {
        // Delete old image from Cloudinary
        if (existing.image && existing.image.public_id) {
            await deleteFromCloudinary(existing.image.public_id);
        }
        const { public_id, secure_url } = await uploadToCloudinary(req.file.buffer, "banners");
        imageData = { public_id, secure_url };
    }
    const banner = await prisma.banner.update({
        where: { id },
        data: {
            ...validation,
            link: validation.link !== undefined ? (validation.link || null) : undefined,
            image: imageData,
        },
    });
    return SuccessResponse(res, "Banner updated successfully", { banner });
});
/**
 * @desc    Delete a banner
 * @route   DELETE /api/v1/admin/banners/:id
 * @access  Admin
 */
export const deleteBanner = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const existing = await prisma.banner.findUnique({ where: { id } });
    if (!existing)
        return next(new ErrorResponse("Banner not found", 404));
    // Delete image from Cloudinary
    if (existing.image && existing.image.public_id) {
        await deleteFromCloudinary(existing.image.public_id);
    }
    await prisma.banner.delete({ where: { id } });
    return SuccessResponse(res, "Banner deleted successfully", null);
});
//# sourceMappingURL=banner.controller.js.map