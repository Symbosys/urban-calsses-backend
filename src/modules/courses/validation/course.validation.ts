import { z } from "zod";

const courseLevel = z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED", "ALL_LEVELS"]);
const courseStatus = z.enum(["DRAFT", "UNDER_REVIEW", "PUBLISHED", "ARCHIVED"]);

export const createCourseValidation = z.object({
  title: z.string().min(1, "Title is required"),
  shortDescription: z.string().optional(),
  description: z.string().optional(),
  thumbnail: z.any().optional(),
  previewVideo: z.any().optional(),
  price: z.coerce.number().min(0, "Price cannot be negative"),
  discountPrice: z.coerce.number().min(0).optional(),
  language: z.string().default("Hindi"),
  level: courseLevel.default("ALL_LEVELS"),
  status: courseStatus.default("DRAFT"),
  isFeatured: z.coerce.boolean().default(false),
  durationMonths: z.coerce.number().int().min(0).default(0),
  subCategoryId: z.string().min(1, "SubCategory ID is required"),
  instructorIds: z.preprocess((val) => {
    if (typeof val === "string") return JSON.parse(val);
    return val;
  }, z.array(z.string()).optional()),
  tags: z.preprocess((val) => {
    if (typeof val === "string") return JSON.parse(val);
    return val;
  }, z.array(z.string()).optional()),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
});

export const updateCourseValidation = createCourseValidation.partial();
