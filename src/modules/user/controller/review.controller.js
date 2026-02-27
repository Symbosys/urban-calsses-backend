import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse, ErrorResponse } from "../../../utils/response.util.js";
import { createReviewValidation, updateReviewValidation, toggleVisibilityValidation } from "../validation/review.validation.js";
/**
 * @desc    Create or update a review
 * @route   POST /api/v1/reviews
 * @access  Student
 */
export const createOrUpdateReview = asyncHandler(async (req, res, next) => {
    const validation = createReviewValidation.parse(req.body);
    const { courseId, rating, comment, userId } = validation;
    // 1. Check if course exists
    const course = await prisma.course.findUnique({ where: { id: courseId } });
    if (!course) {
        return next(new ErrorResponse("Course not found", 404));
    }
    // 2. Check if user is enrolled in the course (optional but recommended)
    const enrollment = await prisma.enrollment.findUnique({
        where: {
            userId_courseId: { userId, courseId }
        }
    });
    if (!enrollment) {
        return next(new ErrorResponse("You must be enrolled in this course to leave a review", 403));
    }
    // 3. Create or Update review
    const updateData = {
        rating,
        isVisible: true
    };
    if (comment !== undefined)
        updateData.comment = comment;
    const createData = {
        userId,
        courseId,
        rating
    };
    if (comment !== undefined)
        createData.comment = comment;
    const review = await prisma.review.upsert({
        where: {
            userId_courseId: { userId, courseId }
        },
        update: updateData,
        create: createData
    });
    return SuccessResponse(res, "Review submitted successfully", { review });
});
/**
 * @desc    Get all reviews for a specific course
 * @route   GET /api/v1/reviews/course/:courseId
 * @access  Public
 */
export const getCourseReviews = asyncHandler(async (req, res, next) => {
    const courseId = req.params.courseId;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const [reviews, total] = await Promise.all([
        prisma.review.findMany({
            where: {
                courseId,
                isVisible: true
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        avatar: true
                    }
                }
            },
            skip,
            take: limit,
            orderBy: { createdAt: "desc" }
        }),
        prisma.review.count({ where: { courseId, isVisible: true } })
    ]);
    return SuccessResponse(res, "Course reviews fetched successfully", {
        reviews,
        pagination: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit)
        }
    });
});
/**
 * @desc    Get my review for a specific course
 * @route   GET /api/v1/reviews/my/:courseId
 * @access  Student
 */
export const getMyReview = asyncHandler(async (req, res, next) => {
    const courseId = req.params.courseId;
    const userId = req.query.userId; // Taking from query for now
    if (!userId) {
        return next(new ErrorResponse("User ID is required", 400));
    }
    const review = await prisma.review.findUnique({
        where: {
            userId_courseId: { userId, courseId }
        }
    });
    return SuccessResponse(res, "My review fetched successfully", { review });
});
/**
 * @desc    Update a review
 * @route   PATCH /api/v1/reviews/:id
 * @access  Owner
 */
export const updateReview = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const validation = updateReviewValidation.parse(req.body);
    const existingReview = await prisma.review.findUnique({ where: { id } });
    if (!existingReview) {
        return next(new ErrorResponse("Review not found", 404));
    }
    // Optional: Check if req.user.id === existingReview.userId
    // To satisfy exactOptionalPropertyTypes, we filter out undefined values
    const updateData = {};
    if (validation.rating !== undefined)
        updateData.rating = validation.rating;
    if (validation.comment !== undefined)
        updateData.comment = validation.comment;
    const updatedReview = await prisma.review.update({
        where: { id },
        data: updateData
    });
    return SuccessResponse(res, "Review updated successfully", { review: updatedReview });
});
/**
 * @desc    Delete a review
 * @route   DELETE /api/v1/reviews/:id
 * @access  Owner/Admin
 */
export const deleteReview = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const existingReview = await prisma.review.findUnique({ where: { id } });
    if (!existingReview) {
        return next(new ErrorResponse("Review not found", 404));
    }
    await prisma.review.delete({ where: { id } });
    return SuccessResponse(res, "Review deleted successfully", null);
});
/**
 * @desc    Get all reviews (Admin)
 * @route   GET /api/v1/reviews
 * @access  Admin
 */
export const getAllReviews = asyncHandler(async (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const [reviews, total] = await Promise.all([
        prisma.review.findMany({
            include: {
                user: {
                    select: { id: true, name: true, email: true }
                },
                course: {
                    select: { id: true, title: true }
                }
            },
            skip,
            take: limit,
            orderBy: { createdAt: "desc" }
        }),
        prisma.review.count()
    ]);
    return SuccessResponse(res, "All reviews fetched successfully", {
        reviews,
        pagination: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit)
        }
    });
});
/**
 * @desc    Toggle review visibility (Admin)
 * @route   PATCH /api/v1/reviews/:id/visibility
 * @access  Admin
 */
export const toggleReviewVisibility = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const { isVisible } = toggleVisibilityValidation.parse(req.body);
    const existingReview = await prisma.review.findUnique({ where: { id } });
    if (!existingReview) {
        return next(new ErrorResponse("Review not found", 404));
    }
    const updatedReview = await prisma.review.update({
        where: { id },
        data: { isVisible }
    });
    return SuccessResponse(res, `Review visibility updated to ${isVisible}`, { review: updatedReview });
});
//# sourceMappingURL=review.controller.js.map