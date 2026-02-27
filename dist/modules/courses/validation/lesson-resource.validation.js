import { z } from "zod";
export const createResourceValidation = z.object({
    title: z.string().min(1, "Title is required"),
    file: z.object({
        url: z.string().url(),
        publicId: z.string(),
        fileName: z.string(),
        size: z.number().optional(),
        mimeType: z.string().optional()
    }),
    lessonId: z.string().min(1, "Lesson ID is required")
});
export const updateResourceValidation = z.object({
    title: z.string().optional()
});
//# sourceMappingURL=lesson-resource.validation.js.map