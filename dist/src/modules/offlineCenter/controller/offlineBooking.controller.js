import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse, ErrorResponse } from "../../../utils/response.util.js";
import { offlineBookingValidation, updateOfflineBookingStatusValidation } from "../validation/offlineBooking.validation.js";
/**
 * @desc    Book a seat for offline center
 * @route   POST /api/v1/offline-bookings
 * @access  Public
 */
export const createOfflineBooking = asyncHandler(async (req, res, next) => {
    const validation = offlineBookingValidation.parse(req.body);
    // Check batch capacity
    const batch = await prisma.offlineBatch.findUnique({
        where: { id: validation.batchId },
        include: {
            _count: {
                select: { bookings: { where: { status: 'COMPLETED' } } }
            }
        }
    });
    if (!batch)
        return next(new ErrorResponse("Offline batch not found", 404));
    if (batch._count.bookings >= batch.capacity) {
        return next(new ErrorResponse("No seats available in this batch", 400));
    }
    const booking = await prisma.offlineBooking.create({
        data: {
            ...validation,
            status: 'PENDING'
        },
    });
    return SuccessResponse(res, "Seat booking request submitted successfully", { booking }, 201);
});
/**
 * @desc    Get all bookings (Admin filterable)
 * @route   GET /api/v1/offline-bookings
 * @access  Admin / Private (authenticated user can see theirs)
 */
export const getAllOfflineBookings = asyncHandler(async (req, res, next) => {
    const userRole = req.user?.role;
    const userId = req.user?.id;
    const where = {};
    if (userRole !== 'ADMIN') {
        if (!userId)
            return next(new ErrorResponse("Authentication required", 401));
        where.userId = userId;
    }
    else {
        if (req.query.batchId)
            where.batchId = req.query.batchId;
        if (req.query.status)
            where.status = req.query.status;
    }
    const bookings = await prisma.offlineBooking.findMany({
        where,
        include: {
            batch: {
                include: {
                    center: true,
                    course: true
                }
            },
            user: true
        },
        orderBy: { bookingDate: 'desc' }
    });
    return SuccessResponse(res, "Bookings fetched successfully", { bookings });
});
/**
 * @desc    Update booking status
 * @route   PATCH /api/v1/offline-bookings/:id/status
 * @access  Admin
 */
export const updateOfflineBookingStatus = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const { status } = updateOfflineBookingStatusValidation.parse(req.body);
    const existing = await prisma.offlineBooking.findUnique({ where: { id } });
    if (!existing)
        return next(new ErrorResponse("Booking not found", 404));
    const booking = await prisma.offlineBooking.update({
        where: { id },
        data: { status }
    });
    return SuccessResponse(res, "Booking status updated successfully", { booking });
});
//# sourceMappingURL=offlineBooking.controller.js.map