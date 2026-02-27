import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse, ErrorResponse } from "../../../utils/response.util.js";
import { blogValidation, updateBlogValidation } from "../validation/blog.validation.js";
import { removeUndefined } from "../../../utils/utils.js";

/**
 * @desc    Create a new blog post
 * @route   POST /api/v1/blogs
 * @access  Admin/Instructor
 */
export const createBlog = asyncHandler(async (req, res, next) => {
  const validation = blogValidation.parse(req.body);

  const blog = await (prisma as any).blog.create({
    data: {
      ...validation,
      publishedAt: validation.isPublished ? new Date() : null,
    },
  });

  return SuccessResponse(res, "Blog created successfully", { blog }, 201);
});

/**
 * @desc    Get all blogs
 * @route   GET /api/v1/blogs
 * @access  Public
 */
export const getBlogs = asyncHandler(async (req, res, next) => {
  const { category, isPublished, search } = req.query;

  const where: any = {};
  if (category) where.category = category;
  if (isPublished !== undefined) where.isPublished = isPublished === "true";
  if (search) {
    where.OR = [
      { title: { contains: search as string, mode: "insensitive" } },
      { content: { contains: search as string, mode: "insensitive" } },
    ];
  }

  const blogs = await (prisma as any).blog.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });

  return SuccessResponse(res, "Blogs fetched successfully", { blogs });
});

/**
 * @desc    Get blog by ID
 * @route   GET /api/v1/blogs/:id
 * @access  Public
 */
export const getBlog = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const blog = await (prisma as any).blog.findUnique({
    where: { id },
  });

  if (!blog) return next(new ErrorResponse("Blog not found", 404));

  return SuccessResponse(res, "Blog fetched successfully", { blog });
});

/**
 * @desc    Update blog post
 * @route   PATCH /api/v1/blogs/:id
 * @access  Admin/Instructor
 */
export const updateBlog = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const validation = updateBlogValidation.parse(req.body);

  const existingBlog = await (prisma as any).blog.findUnique({ where: { id } });
  if (!existingBlog) return next(new ErrorResponse("Blog not found", 404));

  // Handle publishedAt logic
  let publishedAt = validation.publishedAt ? new Date(validation.publishedAt) : existingBlog.publishedAt;
  if (validation.isPublished && !existingBlog.isPublished && !validation.publishedAt) {
    publishedAt = new Date();
  }

  const blog = await (prisma as any).blog.update({
    where: { id },
    data: {
      ...removeUndefined(validation),
      publishedAt,
    },
  });

  return SuccessResponse(res, "Blog updated successfully", { blog });
});

/**
 * @desc    Delete blog post
 * @route   DELETE /api/v1/blogs/:id
 * @access  Admin
 */
export const deleteBlog = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const existing = await (prisma as any).blog.findUnique({ where: { id } });
  if (!existing) return next(new ErrorResponse("Blog not found", 404));

  await (prisma as any).blog.delete({
    where: { id },
  });

  return SuccessResponse(res, "Blog deleted successfully", null);
});
