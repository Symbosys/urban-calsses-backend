import { z } from "zod";
export const createReviewValidation = z.object({
    courseId: z.string().min(1, "Course ID is required"),
    rating: z.number().min(1, "Rating must be at least 1").max(5, "Rating cannot exceed 5"),
    comment: z.string().optional(),
    userId: z.string().min(1, "User ID is required"), // For now, taking from body
});
export const updateReviewValidation = z.object({
    rating: z.number().min(1).max(5).optional(),
    comment: z.string().optional(),
});
export const toggleVisibilityValidation = z.object({
    isVisible: z.boolean(),
});
//# sourceMappingURL=review.validation.js.map