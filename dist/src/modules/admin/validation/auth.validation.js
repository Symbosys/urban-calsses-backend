import { z } from "zod";
export const adminLoginValidation = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});
export const addAdminValidation = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(6),
});
//# sourceMappingURL=auth.validation.js.map