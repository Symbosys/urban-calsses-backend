import { z } from "zod";
export const couponBase = z.object({
    code: z.string().min(1, "Coupon code is required").toUpperCase(),
    description: z.string().optional(),
    discountType: z.enum(["PERCENTAGE", "FIXED"]),
    discountValue: z.coerce.number().positive("Discount value must be positive"),
    validFrom: z.coerce.date(),
    validTill: z.coerce.date(),
    minOrderAmount: z.coerce.number().min(0).optional(),
    maxUses: z.coerce.number().int().min(0).optional().nullable(),
    isActive: z.coerce.boolean().default(true),
});
export const couponValidation = couponBase.refine((data) => data.validTill > data.validFrom, {
    message: "Valid Till must be after Valid From",
    path: ["validTill"],
});
export const updateCouponValidation = couponBase.partial().refine((data) => {
    if (data.validFrom && data.validTill) {
        return data.validTill > data.validFrom;
    }
    return true;
}, {
    message: "Valid Till must be after Valid From",
    path: ["validTill"],
});
//# sourceMappingURL=coupon.validation.js.map