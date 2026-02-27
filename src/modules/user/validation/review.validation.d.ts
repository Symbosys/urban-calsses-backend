import { z } from "zod";
export declare const createReviewValidation: z.ZodObject<{
    courseId: z.ZodString;
    rating: z.ZodNumber;
    comment: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
}, z.core.$strip>;
export declare const updateReviewValidation: z.ZodObject<{
    rating: z.ZodOptional<z.ZodNumber>;
    comment: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const toggleVisibilityValidation: z.ZodObject<{
    isVisible: z.ZodBoolean;
}, z.core.$strip>;
//# sourceMappingURL=review.validation.d.ts.map