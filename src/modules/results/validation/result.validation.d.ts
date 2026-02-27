import { z } from "zod";
export declare const resultValidation: z.ZodObject<{
    studentName: z.ZodString;
    rank: z.ZodString;
    examName: z.ZodString;
    year: z.ZodCoercedNumber<unknown>;
    image: z.ZodOptional<z.ZodAny>;
    college: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    quote: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    isFeatured: z.ZodDefault<z.ZodCoercedBoolean<unknown>>;
    categoryId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export declare const updateResultValidation: z.ZodObject<{
    studentName: z.ZodOptional<z.ZodString>;
    rank: z.ZodOptional<z.ZodString>;
    examName: z.ZodOptional<z.ZodString>;
    year: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    image: z.ZodOptional<z.ZodOptional<z.ZodAny>>;
    college: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    quote: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    isFeatured: z.ZodOptional<z.ZodDefault<z.ZodCoercedBoolean<unknown>>>;
    categoryId: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
}, z.core.$strip>;
//# sourceMappingURL=result.validation.d.ts.map