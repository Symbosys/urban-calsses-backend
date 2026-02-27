import { z } from "zod";
export declare const subjectValidation: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodAny>;
    order: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    courseId: z.ZodString;
}, z.core.$strip>;
export declare const updateSubjectValidation: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    icon: z.ZodOptional<z.ZodOptional<z.ZodAny>>;
    order: z.ZodOptional<z.ZodDefault<z.ZodCoercedNumber<unknown>>>;
    courseId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=subject.validation.d.ts.map