import { z } from "zod";
export declare const sectionValidation: z.ZodObject<{
    title: z.ZodString;
    order: z.ZodDefault<z.ZodNumber>;
    subjectId: z.ZodString;
}, z.core.$strip>;
export declare const updateSectionValidation: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    order: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    subjectId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=section.validation.d.ts.map