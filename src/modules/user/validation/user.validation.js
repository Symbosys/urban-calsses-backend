import { z } from "zod";
export const updateUserValidation = z.object({
    name: z.string().min(1, "Name must be at least 1 character").optional(),
    phone: z.string().min(10, "Phone number must be at least 10 digits").optional(),
    isBlocked: z.boolean().optional(),
});
//# sourceMappingURL=user.validation.js.map