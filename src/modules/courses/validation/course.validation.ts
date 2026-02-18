import { z } from "zod";

const courseLevel = z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED", "ALL_LEVELS"]);
const courseStatus = z.enum(["DRAFT", "UNDER_REVIEW", "PUBLISHED", "ARCHIVED"]);

export const createCourseValidation = z.object({
  title: z.string().min(1, "Title is required"),
  shortDescription: z.string().optional(),
  description: z.string().optional(),
  thumbnail: z.object({
    url: z.string().url(),
    publicId: z.string(),
  }).optional(),
  previewVideo: z.object({
    url: z.string().url(),
    publicId: z.string(),
    duration: z.number().optional(),
  }).optional(),
  price: z.number().min(0, "Price cannot be negative"),
  discountPrice: z.number().min(0).optional(),
  language: z.string().default("Hindi"),
  level: courseLevel.default("ALL_LEVELS"),
  status: courseStatus.default("DRAFT"),
  isFeatured: z.boolean().default(false),
  durationMonths: z.number().int().min(0).default(0),
  subCategoryId: z.string().min(1, "SubCategory ID is required"),
  instructorIds: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
});

export const updateCourseValidation = createCourseValidation.partial().extend({
  // Add any update specific overrides here if needed
});
