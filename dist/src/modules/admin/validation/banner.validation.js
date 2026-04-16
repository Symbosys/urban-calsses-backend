import { z } from "zod";
export const bannerValidation = z.object({
    title: z.string().min(1, "Title is required"),
    link: z.string().url("Must be a valid URL").optional().or(z.literal("")),
    order: z.coerce.number().int().default(0),
    isActive: z.coerce.boolean().default(true),
});
export const updateBannerValidation = bannerValidation.partial();
//# sourceMappingURL=banner.validation.js.map