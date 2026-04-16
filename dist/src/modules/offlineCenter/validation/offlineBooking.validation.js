import { z } from "zod";
export const offlineBookingValidation = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    message: z.string().optional().nullable(),
    batchId: z.string().min(1, "Batch ID is required"),
    userId: z.string().optional().nullable(),
});
export const updateOfflineBookingStatusValidation = z.object({
    status: z.enum(["PENDING", "COMPLETED", "FAILED", "REFUNDED"]),
});
//# sourceMappingURL=offlineBooking.validation.js.map