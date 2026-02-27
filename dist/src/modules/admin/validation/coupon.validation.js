import { z } from "zod";
import { DiscountType } from "../../../../generated/prisma/client.js";
export const createCouponValidation = z.object({
    code: z.string().min(3).max(20).transform(val => val.toUpperCase()),
    description: z.string().optional(),
    discountType: z.nativeEnum(DiscountType),
    discountValue: z.number().positive(),
    minOrderAmount: z.number().nonnegative().optional(),
    maxUses: z.number().int().positive().optional(),
    validFrom: z.string().transform(val => new Date(val)),
    validTill: z.string().transform(val => new Date(val)),
    isActive: z.boolean().optional(),
});
export const updateCouponValidation = z.object({
    description: z.string().optional(),
    discountValue: z.number().positive().optional(),
    minOrderAmount: z.number().nonnegative().optional(),
    maxUses: z.number().int().positive().optional(),
    validFrom: z.string().transform(val => new Date(val)).optional(),
    validTill: z.string().transform(val => new Date(val)).optional(),
    isActive: z.boolean().optional(),
});
//# sourceMappingURL=coupon.validation.js.map