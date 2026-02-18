import { z } from "zod";

export const sectionValidation = z.object({
  title: z.string().min(1, "Title is required"),
  order: z.number().int().default(0),
  subjectId: z.string().min(1, "Subject ID is required"),
});

export const updateSectionValidation = sectionValidation.partial();
