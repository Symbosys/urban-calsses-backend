import { z } from "zod";
export declare const offlineCenterValidation: z.ZodObject<{
    name: z.ZodString;
    city: z.ZodString;
    address: z.ZodString;
    phone: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    email: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
    image: z.ZodOptional<z.ZodAny>;
    locationUrl: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
    isActive: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
    order: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const updateOfflineCenterValidation: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    city: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    email: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>>>;
    image: z.ZodOptional<z.ZodOptional<z.ZodAny>>;
    locationUrl: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>>>;
    isActive: z.ZodOptional<z.ZodOptional<z.ZodCoercedBoolean<unknown>>>;
    order: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
}, z.core.$strip>;
//# sourceMappingURL=offlineCenter.validation.d.ts.map