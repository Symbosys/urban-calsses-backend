import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse, ErrorResponse } from "../../../utils/response.util.js";
import { createBannerValidation, updateBannerValidation } from "../validation/banner.validation.js";
import { uploadToCloudinary, deleteFromCloudinary } from "../../../config/cloudinary.js";

/**
 * @desc    Create a new banner
 * @route   POST /api/v1/admin/banners
 * @access  Admin
 */
export const createBanner = asyncHandler(async (req, res, next) => {
  const validation = createBannerValidation.parse(req.body);

  let imageData = null;
  if (req.file) {
    const { public_id, secure_url } = await uploadToCloudinary(req.file.buffer, "banners");
    imageData = { public_id, secure_url };
  }
  
  const createData: any = {
    title: validation.title,
    image: imageData,
    order: validation.order || 0,
    isActive: validation.isActive !== undefined ? validation.isActive : true
  };
  if (validation.link !== undefined) createData.link = validation.link;

  const banner = await prisma.banner.create({
    data: createData
  });

  return SuccessResponse(res, "Banner created successfully", { banner });
});

/**
 * @desc    Get all banners
 * @route   GET /api/v1/admin/banners
 * @access  Admin/Public
 */
export const getAllBanners = asyncHandler(async (req, res, next) => {
  const banners = await prisma.banner.findMany({
    orderBy: { order: "asc" }
  });

  return SuccessResponse(res, "Banners fetched successfully", { banners });
});

/**
 * @desc    Update a banner
 * @route   PATCH /api/v1/admin/banners/:id
 * @access  Admin
 */
export const updateBanner = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;
  const validation = updateBannerValidation.parse(req.body);

  const existingBanner = await prisma.banner.findUnique({ where: { id } });
  if (!existingBanner) {
    return next(new ErrorResponse("Banner not found", 404));
  }

  let imageData = existingBanner.image;
  if (req.file) {
    // Delete previous image if exists
    if (existingBanner.image && (existingBanner.image as any).public_id) {
      await deleteFromCloudinary((existingBanner.image as any).public_id);
    }
    const { public_id, secure_url } = await uploadToCloudinary(req.file.buffer, "banners");
    imageData = { public_id, secure_url };
  }

  const updateData: any = {};
  if (validation.title !== undefined) updateData.title = validation.title;
  if (validation.link !== undefined) updateData.link = validation.link;
  if (validation.order !== undefined) updateData.order = validation.order;
  if (validation.isActive !== undefined) updateData.isActive = validation.isActive;
  updateData.image = imageData;

  const updatedBanner = await prisma.banner.update({
    where: { id },
    data: updateData
  });

  return SuccessResponse(res, "Banner updated successfully", { banner: updatedBanner });
});

/**
 * @desc    Delete a banner
 * @route   DELETE /api/v1/admin/banners/:id
 * @access  Admin
 */
export const deleteBanner = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;

  const existingBanner = await prisma.banner.findUnique({ where: { id } });
  if (!existingBanner) {
    return next(new ErrorResponse("Banner not found", 404));
  }

  await prisma.banner.delete({ where: { id } });

  return SuccessResponse(res, "Banner deleted successfully", null);
});
