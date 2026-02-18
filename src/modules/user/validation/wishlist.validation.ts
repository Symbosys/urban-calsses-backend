import { z } from "zod";

export const toggleWishlistValidation = z.object({
  courseId: z.string().min(1, "Course ID is required"),
  userId: z.string().min(1, "User ID is required"), // placeholder for auth
});

export const checkWishlistValidation = z.object({
  courseId: z.string().min(1, "Course ID is required"),
  userId: z.string().min(1, "User ID is required"), // placeholder for auth
});
