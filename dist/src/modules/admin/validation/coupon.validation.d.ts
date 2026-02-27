import { z } from "zod";
export declare const createCouponValidation: z.ZodObject<{
    code: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    description: z.ZodOptional<z.ZodString>;
    discountType: z.ZodEnum<{
        readonly PERCENTAGE: "PERCENTAGE";
        readonly FIXED: "FIXED";
    }>;
    discountValue: z.ZodNumber;
    minOrderAmount: z.ZodOptional<z.ZodNumber>;
    maxUses: z.ZodOptional<z.ZodNumber>;
    validFrom: z.ZodPipe<z.ZodString, z.ZodTransform<Date, string>>;
    validTill: z.ZodPipe<z.ZodString, z.ZodTransform<Date, string>>;
    isActive: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const updateCouponValidation: z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    discountValue: z.ZodOptional<z.ZodNumber>;
    minOrderAmount: z.ZodOptional<z.ZodNumber>;
    maxUses: z.ZodOptional<z.ZodNumber>;
    validFrom: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<Date, string>>>;
    validTill: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<Date, string>>>;
    isActive: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
//# sourceMappingURL=coupon.validation.d.ts.map