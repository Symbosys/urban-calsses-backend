import { z } from "zod";

export const categoryValidation = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  icon: z.object({
    url: z.string().url(),
    publicId: z.string(),
  }).optional(),
  order: z.number().int().default(0),
  isActive: z.boolean().default(true),
});

export const updateCategoryValidation = categoryValidation.partial();

export const subCategoryValidation = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  icon: z.object({
    url: z.string().url(),
    publicId: z.string(),
  }).optional(),
  order: z.number().int().default(0),
  isActive: z.boolean().default(true),
  categoryId: z.string().min(1, "Category ID is required"),
});

export const updateSubCategoryValidation = subCategoryValidation.partial();
