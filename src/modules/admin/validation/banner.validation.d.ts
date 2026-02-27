import { z } from "zod";
export declare const createBannerValidation: z.ZodObject<{
    title: z.ZodString;
    image: z.ZodOptional<z.ZodAny>;
    link: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
    order: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    isActive: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
}, z.core.$strip>;
export declare const updateBannerValidation: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodOptional<z.ZodAny>>;
    link: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>>>;
    order: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    isActive: z.ZodOptional<z.ZodOptional<z.ZodCoercedBoolean<unknown>>>;
}, z.core.$strip>;
//# sourceMappingURL=banner.validation.d.ts.map