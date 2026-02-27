import { z } from "zod";
export declare const createResourceValidation: z.ZodObject<{
    title: z.ZodString;
    file: z.ZodObject<{
        url: z.ZodString;
        publicId: z.ZodString;
        fileName: z.ZodString;
        size: z.ZodOptional<z.ZodNumber>;
        mimeType: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    lessonId: z.ZodString;
}, z.core.$strip>;
export declare const updateResourceValidation: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=lesson-resource.validation.d.ts.map