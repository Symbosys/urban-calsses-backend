import { z } from "zod";

export const createInstructorValidation = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().optional(),
  avatar: z.object({
    url: z.string().url(),
    publicId: z.string(),
  }).optional(),
  bio: z.string().optional(),
  specialization: z.string().optional(),
  experience: z.number().int().min(0).optional(),
});

export const updateInstructorValidation = createInstructorValidation.partial().extend({
  isVerified: z.boolean().optional(),
  isBlocked: z.boolean().optional(),
  rating: z.number().min(0).max(5).optional(),
});
