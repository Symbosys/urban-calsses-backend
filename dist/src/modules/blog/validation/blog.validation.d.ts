import { z } from "zod";
export declare const blogValidation: z.ZodObject<{
    title: z.ZodString;
    slug: z.ZodString;
    content: z.ZodString;
    excerpt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    category: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    isPublished: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodPipe<z.ZodString, z.ZodTransform<boolean, string>>]>>;
    publishedAt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    authorName: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export declare const updateBlogValidation: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    slug: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    excerpt: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    category: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    tags: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    isPublished: z.ZodOptional<z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodPipe<z.ZodString, z.ZodTransform<boolean, string>>]>>>;
    publishedAt: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    authorName: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
}, z.core.$strip>;
//# sourceMappingURL=blog.validation.d.ts.map