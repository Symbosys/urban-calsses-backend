import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse, ErrorResponse } from "../../../utils/response.util.js";
import { offlineBatchValidation, updateOfflineBatchValidation } from "../validation/offlineBatch.validation.js";
import { removeUndefined } from "../../../utils/utils.js";
/**
 * @desc    Create a new offline batch
 * @route   POST /api/v1/offline-batches
 * @access  Admin
 */
export const createOfflineBatch = asyncHandler(async (req, res, next) => {
    const validation = offlineBatchValidation.parse(req.body);
    const batch = await prisma.offlineBatch.create({
        data: validation,
    });
    return SuccessResponse(res, "Offline batch created successfully", { batch }, 201);
});
/**
 * @desc    Get all offline batches
 * @route   GET /api/v1/offline-batches
 * @access  Public
 */
export const getAllOfflineBatches = asyncHandler(async (req, res, next) => {
    const centerId = req.query.centerId;
    const courseId = req.query.courseId;
    const where = {};
    if (centerId)
        where.centerId = centerId;
    if (courseId)
        where.courseId = courseId;
    const batches = await prisma.offlineBatch.findMany({
        where,
        include: {
            center: true,
            course: true,
            _count: {
                select: { bookings: { where: { status: 'COMPLETED' } } }
            }
        }
    });
    return SuccessResponse(res, "Offline batches fetched successfully", { batches });
});
/**
 * @desc    Get offline batch by ID
 * @route   GET /api/v1/offline-batches/:id
 * @access  Public
 */
export const getOfflineBatchById = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const batch = await prisma.offlineBatch.findUnique({
        where: { id },
        include: {
            center: true,
            course: true,
            bookings: true
        }
    });
    if (!batch)
        return next(new ErrorResponse("Offline batch not found", 404));
    return SuccessResponse(res, "Offline batch fetched successfully", { batch });
});
/**
 * @desc    Update offline batch
 * @route   PATCH /api/v1/offline-batches/:id
 * @access  Admin
 */
export const updateOfflineBatch = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const validation = updateOfflineBatchValidation.parse(req.body);
    const existing = await prisma.offlineBatch.findUnique({ where: { id } });
    if (!existing)
        return next(new ErrorResponse("Offline batch not found", 404));
    const updateData = removeUndefined(validation);
    const batch = await prisma.offlineBatch.update({
        where: { id },
        data: updateData,
    });
    return SuccessResponse(res, "Offline batch updated successfully", { batch });
});
/**
 * @desc    Delete offline batch
 * @route   DELETE /api/v1/offline-batches/:id
 * @access  Admin
 */
export const deleteOfflineBatch = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const existing = await prisma.offlineBatch.findUnique({ where: { id } });
    if (!existing)
        return next(new ErrorResponse("Offline batch not found", 404));
    await prisma.offlineBatch.delete({ where: { id } });
    return SuccessResponse(res, "Offline batch deleted successfully", null);
});
//# sourceMappingURL=offlineBatch.controller.js.map