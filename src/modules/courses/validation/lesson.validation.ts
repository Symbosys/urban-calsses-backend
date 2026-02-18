import { z } from "zod";

const lessonType = z.enum(["VIDEO", "PDF", "QUIZ", "TEXT", "LIVE"]);

export const lessonValidation = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  type: lessonType.default("VIDEO"),
  content: z.string().optional(),
  video: z.object({
    url: z.string().url(),
    publicId: z.string(),
    duration: z.number().optional(),
    quality: z.string().optional(),
  }).optional(),
  attachments: z.array(z.object({
    url: z.string().url(),
    publicId: z.string(),
    name: z.string(),
    type: z.string(),
    size: z.number(),
  })).optional(),
  duration: z.number().int().min(0).default(0),
  order: z.number().int().default(0),
  isFree: z.boolean().default(false),
  sectionId: z.string().min(1, "Section ID is required"),
});

export const updateLessonValidation = lessonValidation.partial();
