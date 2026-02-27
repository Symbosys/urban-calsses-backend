import { z } from "zod";

export const subjectValidation = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  icon: z.any().optional(),
  order: z.coerce.number().int().default(0),
  courseId: z.string().min(1, "Course ID is required"),
});

export const updateSubjectValidation = subjectValidation.partial();
