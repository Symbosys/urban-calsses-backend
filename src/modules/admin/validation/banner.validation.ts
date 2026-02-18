import { z } from "zod";

export const createBannerValidation = z.object({
  title: z.string().min(1, "Title is required"),
  image: z.any(), // Typically handled via Multer and then validated/transformed
  link: z.string().url("Invalid link URL").optional(),
  order: z.number().int().optional(),
  isActive: z.boolean().optional(),
});

export const updateBannerValidation = z.object({
  title: z.string().optional(),
  link: z.string().url().optional(),
  order: z.number().int().optional(),
  isActive: z.boolean().optional(),
});
