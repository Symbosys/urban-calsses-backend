import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse, ErrorResponse } from "../../../utils/response.util.js";
import { resultValidation, updateResultValidation } from "../validation/result.validation.js";
import { removeUndefined } from "../../../utils/utils.js";
import { uploadToCloudinary, deleteFromCloudinary } from "../../../config/cloudinary.js";
/**
 * @desc    Create a new result
 * @route   POST /api/v1/results
 * @access  Admin
 */
export const createResult = asyncHandler(async (req, res, next) => {
    const validation = resultValidation.parse(req.body);
    let imageData = null;
    if (req.file) {
        const { public_id, secure_url } = await uploadToCloudinary(req.file.buffer, "results");
        imageData = { public_id, secure_url };
    }
    const result = await prisma.result.create({
        data: {
            ...validation,
            image: imageData,
        },
    });
    return SuccessResponse(res, "Result created successfully", { result }, 201);
});
/**
 * @desc    Get all results with filtering
 * @route   GET /api/v1/results
 * @access  Public
 */
export const getAllResults = asyncHandler(async (req, res, next) => {
    const categoryId = req.query.categoryId;
    const isFeatured = req.query.isFeatured === "true";
    const where = {
        AND: [
            categoryId ? { categoryId } : {},
            req.query.isFeatured ? { isFeatured } : {},
        ],
    };
    const results = await prisma.result.findMany({
        where,
        orderBy: { createdAt: "desc" },
        include: {
            category: {
                select: { name: true, id: true }
            }
        }
    });
    return SuccessResponse(res, "Results fetched successfully", { results });
});
/**
 * @desc    Get result by ID
 * @route   GET /api/v1/results/:id
 * @access  Public
 */
export const getResultById = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const result = await prisma.result.findUnique({
        where: { id },
        include: {
            category: true
        }
    });
    if (!result)
        return next(new ErrorResponse("Result not found", 404));
    return SuccessResponse(res, "Result fetched successfully", { result });
});
/**
 * @desc    Update result
 * @route   PATCH /api/v1/results/:id
 * @access  Admin
 */
export const updateResult = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const validation = updateResultValidation.parse(req.body);
    const existing = await prisma.result.findUnique({ where: { id } });
    if (!existing)
        return next(new ErrorResponse("Result not found", 404));
    let imageData = existing.image;
    if (req.file) {
        // Delete previous image if exists
        if (existing.image && existing.image.public_id) {
            await deleteFromCloudinary(existing.image.public_id);
        }
        const { public_id, secure_url } = await uploadToCloudinary(req.file.buffer, "results");
        imageData = { public_id, secure_url };
    }
    const updateData = removeUndefined(validation);
    const result = await prisma.result.update({
        where: { id },
        data: {
            ...updateData,
            image: imageData,
        },
    });
    return SuccessResponse(res, "Result updated successfully", { result });
});
/**
 * @desc    Delete result
 * @route   DELETE /api/v1/results/:id
 * @access  Admin
 */
export const deleteResult = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const existing = await prisma.result.findUnique({ where: { id } });
    if (!existing)
        return next(new ErrorResponse("Result not found", 404));
    await prisma.result.delete({ where: { id } });
    return SuccessResponse(res, "Result deleted successfully", null);
});
//# sourceMappingURL=result.controller.js.map