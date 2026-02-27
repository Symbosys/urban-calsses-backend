import { z } from "zod";
export declare const createAuthValidation: z.ZodObject<{
    email: z.ZodString;
}, z.core.$strip>;
export declare const verifyOtpValidation: z.ZodObject<{
    email: z.ZodString;
    otp: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=auth.validation.d.ts.map