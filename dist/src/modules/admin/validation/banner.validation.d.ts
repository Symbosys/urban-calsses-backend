import { z } from "zod";
export declare const bannerValidation: z.ZodObject<{
    title: z.ZodString;
    link: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    order: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    isActive: z.ZodDefault<z.ZodCoercedBoolean<unknown>>;
}, z.core.$strip>;
export declare const updateBannerValidation: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    link: z.ZodOptional<z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>>;
    order: z.ZodOptional<z.ZodDefault<z.ZodCoercedNumber<unknown>>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodCoercedBoolean<unknown>>>;
}, z.core.$strip>;
//# sourceMappingURL=banner.validation.d.ts.map