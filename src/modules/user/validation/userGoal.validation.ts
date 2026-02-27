import { z } from "zod";

export const setUserGoalsValidation = z.object({
  userId: z.string().min(1, "User ID is required"),
  subCategoryIds: z.array(z.string()).min(1, "At least one goal is required"),
});

export const getUserGoalsValidation = z.object({
  userId: z.string().min(1, "User ID is required"),
});
