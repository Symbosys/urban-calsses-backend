import { z } from "zod";

export const categoryValidation = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  icon: z.any().optional(),
  order: z.coerce.number().int().default(0),
  isActive: z.coerce.boolean().default(true),
});

export const updateCategoryValidation = categoryValidation.partial();

export const subCategoryValidation = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  icon: z.any().optional(),
  order: z.coerce.number().int().default(0),
  isActive: z.coerce.boolean().default(true),
  categoryId: z.string().min(1, "Category ID is required"),
});

export const updateSubCategoryValidation = subCategoryValidation.partial();
