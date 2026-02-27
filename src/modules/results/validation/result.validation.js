import { z } from "zod";
export const resultValidation = z.object({
    studentName: z.string().min(1, "Student name is required"),
    rank: z.string().min(1, "Rank is required"),
    examName: z.string().min(1, "Exam name is required"),
    year: z.coerce.number().int(),
    image: z.any().optional(),
    college: z.string().optional().nullable(),
    quote: z.string().optional().nullable(),
    isFeatured: z.coerce.boolean().default(false),
    categoryId: z.string().optional().nullable(),
});
export const updateResultValidation = resultValidation.partial();
//# sourceMappingURL=result.validation.js.map