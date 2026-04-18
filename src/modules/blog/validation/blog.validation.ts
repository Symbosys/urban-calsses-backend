import { z } from "zod";

export const blogValidation = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  content: z.string().min(1, "Content is required"),
  excerpt: z.string().optional().nullable(),
  category: z.string().optional().nullable(),
  tags: z.array(z.string()).optional(),
  isPublished: z.boolean().or(z.string().transform((val) => val === "true" || val === "1")).optional(),
  publishedAt: z.string().optional().nullable(),
  authorName: z.string().optional().nullable(),
});

export const updateBlogValidation = blogValidation.partial();
