import { z } from "zod";

export const createBannerValidation = z.object({
  title: z.string().min(1, "Title is required"),
  image: z.any().optional(),
  link: z.string().url("Invalid link URL").or(z.string().length(0)).optional().nullable(),
  order: z.coerce.number().int().optional(),
  isActive: z.coerce.boolean().optional(),
});

export const updateBannerValidation = createBannerValidation.partial();
