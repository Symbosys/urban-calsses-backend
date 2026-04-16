import { z } from "zod";
export declare const offlineBookingValidation: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
    message: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    batchId: z.ZodString;
    userId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export declare const updateOfflineBookingStatusValidation: z.ZodObject<{
    status: z.ZodEnum<{
        COMPLETED: "COMPLETED";
        PENDING: "PENDING";
        FAILED: "FAILED";
        REFUNDED: "REFUNDED";
    }>;
}, z.core.$strip>;
//# sourceMappingURL=offlineBooking.validation.d.ts.map