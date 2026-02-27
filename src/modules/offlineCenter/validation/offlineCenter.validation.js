import { z } from "zod";
export const offlineCenterValidation = z.object({
    name: z.string().min(1, "Name is required"),
    city: z.string().min(1, "City is required"),
    address: z.string().min(1, "Address is required"),
    phone: z.string().optional().nullable(),
    email: z.string().email("Invalid email").or(z.string().length(0)).optional().nullable(),
    image: z.any().optional(),
    locationUrl: z.string().url("Invalid URL").or(z.string().length(0)).optional().nullable(),
    isActive: z.coerce.boolean().optional(),
    order: z.coerce.number().int().optional(),
});
export const updateOfflineCenterValidation = offlineCenterValidation.partial();
//# sourceMappingURL=offlineCenter.validation.js.map