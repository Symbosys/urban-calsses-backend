import { z } from "zod";
export declare const createInstructorValidation: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
    avatar: z.ZodOptional<z.ZodAny>;
    bio: z.ZodOptional<z.ZodString>;
    specialization: z.ZodOptional<z.ZodString>;
    experience: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const updateInstructorValidation: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    avatar: z.ZodOptional<z.ZodOptional<z.ZodAny>>;
    bio: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    specialization: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    experience: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    isVerified: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
    isBlocked: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
    rating: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
//# sourceMappingURL=instructor.validation.d.ts.map