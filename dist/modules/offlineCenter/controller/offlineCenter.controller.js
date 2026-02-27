import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse, ErrorResponse } from "../../../utils/response.util.js";
import { offlineCenterValidation, updateOfflineCenterValidation } from "../validation/offlineCenter.validation.js";
import { removeUndefined } from "../../../utils/utils.js";
import { uploadToCloudinary, deleteFromCloudinary } from "../../../config/cloudinary.js";
/**
 * @desc    Create a new offline center
 * @route   POST /api/v1/offline-centers
 * @access  Admin
 */
export const createOfflineCenter = asyncHandler(async (req, res, next) => {
    const validation = offlineCenterValidation.parse(req.body);
    let imageData = null;
    if (req.file) {
        const { public_id, secure_url } = await uploadToCloudinary(req.file.buffer, "centers");
        imageData = { public_id, secure_url };
    }
    const center = await prisma.offlineCenter.create({
        data: {
            ...validation,
            image: imageData,
        },
    });
    return SuccessResponse(res, "Offline center created successfully", { center }, 201);
});
/**
 * @desc    Get all offline centers
 * @route   GET /api/v1/offline-centers
 * @access  Public
 */
export const getAllOfflineCenters = asyncHandler(async (req, res, next) => {
    const city = req.query.city;
    const isActive = req.query.isActive === "true";
    const where = {};
    if (city)
        where.city = city.toLowerCase();
    if (req.query.isActive)
        where.isActive = isActive;
    const centers = await prisma.offlineCenter.findMany({
        where,
        orderBy: { order: "asc" },
    });
    return SuccessResponse(res, "Offline centers fetched successfully", { centers });
});
/**
 * @desc    Get offline center by ID
 * @route   GET /api/v1/offline-centers/:id
 * @access  Public
 */
export const getOfflineCenterById = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const center = await prisma.offlineCenter.findUnique({
        where: { id },
    });
    if (!center)
        return next(new ErrorResponse("Offline center not found", 404));
    return SuccessResponse(res, "Offline center fetched successfully", { center });
});
/**
 * @desc    Update offline center
 * @route   PATCH /api/v1/offline-centers/:id
 * @access  Admin
 */
export const updateOfflineCenter = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const validation = updateOfflineCenterValidation.parse(req.body);
    const existing = await prisma.offlineCenter.findUnique({ where: { id } });
    if (!existing)
        return next(new ErrorResponse("Offline center not found", 404));
    let imageData = existing.image;
    if (req.file) {
        // Delete previous image if exists
        if (existing.image && existing.image.public_id) {
            await deleteFromCloudinary(existing.image.public_id);
        }
        const { public_id, secure_url } = await uploadToCloudinary(req.file.buffer, "centers");
        imageData = { public_id, secure_url };
    }
    const updateData = removeUndefined(validation);
    const center = await prisma.offlineCenter.update({
        where: { id },
        data: {
            ...updateData,
            image: imageData,
        },
    });
    return SuccessResponse(res, "Offline center updated successfully", { center });
});
/**
 * @desc    Delete offline center
 * @route   DELETE /api/v1/offline-centers/:id
 * @access  Admin
 */
export const deleteOfflineCenter = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const existing = await prisma.offlineCenter.findUnique({ where: { id } });
    if (!existing)
        return next(new ErrorResponse("Offline center not found", 404));
    await prisma.offlineCenter.delete({ where: { id } });
    return SuccessResponse(res, "Offline center deleted successfully", null);
});
//# sourceMappingURL=offlineCenter.controller.js.map