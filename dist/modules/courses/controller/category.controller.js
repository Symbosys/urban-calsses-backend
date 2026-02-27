import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse, ErrorResponse } from "../../../utils/response.util.js";
import { categoryValidation, updateCategoryValidation, subCategoryValidation, updateSubCategoryValidation } from "../validation/category.validation.js";
import { slugify, removeUndefined } from "../../../utils/utils.js";
import { uploadToCloudinary, deleteFromCloudinary } from "../../../config/cloudinary.js";
// ==========================================
// CATEGORY CONTROLLERS
// ==========================================
export const createCategory = asyncHandler(async (req, res, next) => {
    const validation = categoryValidation.parse(req.body);
    let slug = slugify(validation.name);
    const existing = await prisma.category.findFirst({ where: { slug } });
    if (existing)
        slug = `${slug}-${Math.floor(Math.random() * 1000)}`;
    let iconData = null;
    if (req.file) {
        const { public_id, secure_url } = await uploadToCloudinary(req.file.buffer, "categories");
        iconData = { public_id, secure_url };
    }
    const category = await prisma.category.create({
        data: {
            ...validation,
            slug,
            icon: iconData,
        },
    });
    return SuccessResponse(res, "Category created successfully", { category }, 201);
});
/**
 * @desc    Get all categories with subcategory counts
 * @route   GET /api/v1/categories
 */
export const getAllCategories = asyncHandler(async (req, res, next) => {
    const categories = await prisma.category.findMany({
        orderBy: { order: "asc" },
        include: {
            _count: {
                select: { subCategories: true }
            }
        }
    });
    return SuccessResponse(res, "Categories fetched successfully", { categories });
});
/**
 * @desc    Get category by ID with subcategories
 * @route   GET /api/v1/categories/:id
 */
export const getCategoryById = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const category = await prisma.category.findUnique({
        where: { id },
        include: {
            subCategories: {
                orderBy: { order: "asc" }
            }
        }
    });
    if (!category)
        return next(new ErrorResponse("Category not found", 404));
    return SuccessResponse(res, "Category fetched successfully", { category });
});
export const updateCategory = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const validation = updateCategoryValidation.parse(req.body);
    const existing = await prisma.category.findUnique({ where: { id } });
    if (!existing)
        return next(new ErrorResponse("Category not found", 404));
    let slug = existing.slug;
    if (validation.name && validation.name !== existing.name) {
        slug = slugify(validation.name);
        const slugExists = await prisma.category.findFirst({ where: { slug, id: { not: id } } });
        if (slugExists)
            slug = `${slug}-${Math.floor(Math.random() * 1000)}`;
    }
    let iconData = existing.icon;
    if (req.file) {
        if (existing.icon && existing.icon.public_id) {
            await deleteFromCloudinary(existing.icon.public_id);
        }
        const { public_id, secure_url } = await uploadToCloudinary(req.file.buffer, "categories");
        iconData = { public_id, secure_url };
    }
    const category = await prisma.category.update({
        where: { id },
        data: {
            ...removeUndefined(validation),
            slug,
            icon: iconData,
        },
    });
    return SuccessResponse(res, "Category updated successfully", { category });
});
/**
 * @desc    Delete category
 * @route   DELETE /api/v1/categories/:id
 */
export const deleteCategory = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    await prisma.category.delete({ where: { id } });
    return SuccessResponse(res, "Category deleted successfully", null);
});
// ==========================================
// SUB-CATEGORY CONTROLLERS
// ==========================================
export const createSubCategory = asyncHandler(async (req, res, next) => {
    const validation = subCategoryValidation.parse(req.body);
    let slug = slugify(validation.name);
    const existing = await prisma.subCategory.findFirst({ where: { slug } });
    if (existing)
        slug = `${slug}-${Math.floor(Math.random() * 1000)}`;
    let iconData = null;
    if (req.file) {
        const { public_id, secure_url } = await uploadToCloudinary(req.file.buffer, "sub-categories");
        iconData = { public_id, secure_url };
    }
    const subCategory = await prisma.subCategory.create({
        data: {
            ...validation,
            slug,
            icon: iconData,
        },
    });
    return SuccessResponse(res, "Sub-category created successfully", { subCategory }, 201);
});
/**
 * @desc    Get all sub-categories
 * @route   GET /api/v1/sub-categories
 */
export const getAllSubCategories = asyncHandler(async (req, res, next) => {
    const subCategories = await prisma.subCategory.findMany({
        orderBy: { order: "asc" },
        include: {
            category: {
                select: { name: true, id: true }
            },
            _count: {
                select: { courses: true }
            }
        }
    });
    return SuccessResponse(res, "Sub-categories fetched successfully", { subCategories });
});
/**
 * @desc    Get sub-category by ID
 * @route   GET /api/v1/sub-categories/:id
 */
export const getSubCategoryById = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const subCategory = await prisma.subCategory.findUnique({
        where: { id },
        include: {
            category: true
        }
    });
    if (!subCategory)
        return next(new ErrorResponse("Sub-category not found", 404));
    return SuccessResponse(res, "Sub-category fetched successfully", { subCategory });
});
export const updateSubCategory = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const validation = updateSubCategoryValidation.parse(req.body);
    const existing = await prisma.subCategory.findUnique({ where: { id } });
    if (!existing)
        return next(new ErrorResponse("Sub-category not found", 404));
    let slug = existing.slug;
    if (validation.name && validation.name !== existing.name) {
        slug = slugify(validation.name);
        const slugExists = await prisma.subCategory.findFirst({ where: { slug, id: { not: id } } });
        if (slugExists)
            slug = `${slug}-${Math.floor(Math.random() * 1000)}`;
    }
    let iconData = existing.icon;
    if (req.file) {
        if (existing.icon && existing.icon.public_id) {
            await deleteFromCloudinary(existing.icon.public_id);
        }
        const { public_id, secure_url } = await uploadToCloudinary(req.file.buffer, "sub-categories");
        iconData = { public_id, secure_url };
    }
    const subCategory = await prisma.subCategory.update({
        where: { id },
        data: {
            ...removeUndefined(validation),
            slug,
            icon: iconData,
        },
    });
    return SuccessResponse(res, "Sub-category updated successfully", { subCategory });
});
/**
 * @desc    Delete sub-category
 * @route   DELETE /api/v1/sub-categories/:id
 */
export const deleteSubCategory = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    await prisma.subCategory.delete({ where: { id } });
    return SuccessResponse(res, "Sub-category deleted successfully", null);
});
//# sourceMappingURL=category.controller.js.map