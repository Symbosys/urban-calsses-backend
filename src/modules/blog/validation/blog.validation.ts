import { z } from "zod";

export const blogValidation = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  content: z.string().min(1, "Content is required"),
  excerpt: z.string().optional().nullable(),
  thumbnail: z.object({
    url: z.string(),
    publicId: z.string()
  }).optional().nullable(),
  category: z.string().optional().nullable(),
  tags: z.array(z.string()).optional(),
  isPublished: z.boolean().optional(),
  publishedAt: z.string().optional().nullable(),
  authorName: z.string().optional().nullable(),
  authorImage: z.object({
    url: z.string(),
    publicId: z.string()
  }).optional().nullable(),
});

export const updateBlogValidation = blogValidation.partial();
