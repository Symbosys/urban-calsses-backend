import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse, ErrorResponse } from "../../../utils/response.util.js";
import { blogValidation, updateBlogValidation } from "../validation/blog.validation.js";
import { removeUndefined } from "../../../utils/utils.js";
import { uploadToCloudinary, deleteFromCloudinary } from "../../../config/cloudinary.js";
/**
 * @desc    Create a new blog post
 * @route   POST /api/v1/blogs
 * @access  Admin/Instructor
 */
export const createBlog = asyncHandler(async (req, res, next) => {
    const validation = blogValidation.parse(req.body);
    const { publishedAt: _publishedAt, ...rest } = validation;
    let thumbnailData = null;
    let authorImageData = null;
    const files = req.files;
    if (files?.thumbnail?.[0]) {
        const { public_id, secure_url } = await uploadToCloudinary(files.thumbnail[0].buffer, "blogs");
        thumbnailData = { public_id, secure_url, url: secure_url, publicId: public_id };
    }
    if (files?.authorImage?.[0]) {
        const { public_id, secure_url } = await uploadToCloudinary(files.authorImage[0].buffer, "blogs/authors");
        authorImageData = { public_id, secure_url, url: secure_url, publicId: public_id };
    }
    const blog = await prisma.blog.create({
        data: {
            ...removeUndefined(rest),
            thumbnail: thumbnailData,
            authorImage: authorImageData,
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
    const where = {};
    if (category)
        where.category = category;
    if (isPublished !== undefined)
        where.isPublished = isPublished === "true";
    if (search) {
        where.OR = [
            { title: { contains: search, mode: "insensitive" } },
            { content: { contains: search, mode: "insensitive" } },
        ];
    }
    const blogs = await prisma.blog.findMany({
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
    const id = req.params.id;
    const blog = await prisma.blog.findUnique({
        where: { id },
    });
    if (!blog)
        return next(new ErrorResponse("Blog not found", 404));
    return SuccessResponse(res, "Blog fetched successfully", { blog });
});
/**
 * @desc    Update blog post
 * @route   PATCH /api/v1/blogs/:id
 * @access  Admin/Instructor
 */
export const updateBlog = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const validation = updateBlogValidation.parse(req.body);
    const existingBlog = await prisma.blog.findUnique({ where: { id } });
    if (!existingBlog)
        return next(new ErrorResponse("Blog not found", 404));
    // Handle publishedAt logic
    let publishedAt = validation.publishedAt ? new Date(validation.publishedAt) : existingBlog.publishedAt;
    if (validation.isPublished && !existingBlog.isPublished && !validation.publishedAt) {
        publishedAt = new Date();
    }
    let thumbnailData = existingBlog.thumbnail;
    let authorImageData = existingBlog.authorImage;
    const files = req.files;
    if (files?.thumbnail?.[0]) {
        if (existingBlog.thumbnail && existingBlog.thumbnail.publicId) {
            await deleteFromCloudinary(existingBlog.thumbnail.publicId);
        }
        const { public_id, secure_url } = await uploadToCloudinary(files.thumbnail[0].buffer, "blogs");
        thumbnailData = { public_id, secure_url, url: secure_url, publicId: public_id };
    }
    if (files?.authorImage?.[0]) {
        if (existingBlog.authorImage && existingBlog.authorImage.publicId) {
            await deleteFromCloudinary(existingBlog.authorImage.publicId);
        }
        const { public_id, secure_url } = await uploadToCloudinary(files.authorImage[0].buffer, "blogs/authors");
        authorImageData = { public_id, secure_url, url: secure_url, publicId: public_id };
    }
    const { publishedAt: _publishedAt, ...rest } = validation;
    const blog = await prisma.blog.update({
        where: { id },
        data: {
            ...removeUndefined(rest),
            thumbnail: thumbnailData,
            authorImage: authorImageData,
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
    const id = req.params.id;
    const existing = await prisma.blog.findUnique({ where: { id } });
    if (!existing)
        return next(new ErrorResponse("Blog not found", 404));
    await prisma.blog.delete({
        where: { id },
    });
    return SuccessResponse(res, "Blog deleted successfully", null);
});
//# sourceMappingURL=blog.controller.js.map