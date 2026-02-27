/**
 * @desc    Create or update a review
 * @route   POST /api/v1/reviews
 * @access  Student
 */
export declare const createOrUpdateReview: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get all reviews for a specific course
 * @route   GET /api/v1/reviews/course/:courseId
 * @access  Public
 */
export declare const getCourseReviews: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get my review for a specific course
 * @route   GET /api/v1/reviews/my/:courseId
 * @access  Student
 */
export declare const getMyReview: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Update a review
 * @route   PATCH /api/v1/reviews/:id
 * @access  Owner
 */
export declare const updateReview: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Delete a review
 * @route   DELETE /api/v1/reviews/:id
 * @access  Owner/Admin
 */
export declare const deleteReview: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get all reviews (Admin)
 * @route   GET /api/v1/reviews
 * @access  Admin
 */
export declare const getAllReviews: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Toggle review visibility (Admin)
 * @route   PATCH /api/v1/reviews/:id/visibility
 * @access  Admin
 */
export declare const toggleReviewVisibility: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=review.controller.d.ts.map