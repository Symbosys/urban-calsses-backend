import { z } from "zod";
export declare const couponValidation: z.ZodObject<{
    code: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    discountType: z.ZodEnum<{
        PERCENTAGE: "PERCENTAGE";
        FIXED: "FIXED";
    }>;
    discountValue: z.ZodCoercedNumber<unknown>;
    validFrom: z.ZodCoercedDate<unknown>;
    validTill: z.ZodCoercedDate<unknown>;
    minOrderAmount: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    maxUses: z.ZodNullable<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    isActive: z.ZodDefault<z.ZodCoercedBoolean<unknown>>;
}, z.core.$strip>;
export declare const updateCouponValidation: z.ZodObject<{
    code: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    discountType: z.ZodOptional<z.ZodEnum<{
        PERCENTAGE: "PERCENTAGE";
        FIXED: "FIXED";
    }>>;
    discountValue: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    validFrom: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    validTill: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    minOrderAmount: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    maxUses: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodCoercedNumber<unknown>>>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodCoercedBoolean<unknown>>>;
}, z.core.$strip>;
//# sourceMappingURL=adminCoupon.validation.d.ts.map