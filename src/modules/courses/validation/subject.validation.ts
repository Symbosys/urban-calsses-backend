import { z } from "zod";

export const subjectValidation = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  icon: z.object({
    url: z.string().url(),
    publicId: z.string(),
  }).optional(),
  order: z.number().int().default(0),
  courseId: z.string().min(1, "Course ID is required"),
});

export const updateSubjectValidation = subjectValidation.partial();
