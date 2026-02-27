import { z } from "zod";

export const createInstructorValidation = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().optional(),
  avatar: z.any().optional(),
  bio: z.string().optional(),
  specialization: z.string().optional(),
  experience: z.coerce.number().int().min(0).optional(),
});

export const updateInstructorValidation = createInstructorValidation.partial().extend({
  isVerified: z.coerce.boolean().optional(),
  isBlocked: z.coerce.boolean().optional(),
  rating: z.coerce.number().min(0).max(5).optional(),
});
