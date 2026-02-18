import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse, ErrorResponse } from "../../../utils/response.util.js";
import { sectionValidation, updateSectionValidation } from "../validation/section.validation.js";
import { removeUndefined } from "../../../utils/utils.js";
import type { Prisma } from "../../../../generated/prisma/client.js";

/**
 * @desc    Create a new section
 * @route   POST /api/v1/sections
 */
export const createSection = asyncHandler(async (req, res, next) => {
  const validation = sectionValidation.parse(req.body);

  const section = await prisma.section.create({
    data: validation as Prisma.SectionUncheckedCreateInput,
    include: {
      subject: {
        select: { title: true }
      }
    }
  });

  return SuccessResponse(res, "Section created successfully", { section }, 201);
});

/**
 * @desc    Get all sections (optional filter by subjectId) with pagination
 * @route   GET /api/v1/sections
 */
export const getAllSections = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const subjectId = req.query.subjectId as string;
  const skip = (page - 1) * limit;

  const where: Prisma.SectionWhereInput = subjectId ? { subjectId } : {};

  const [sections, total] = await Promise.all([
    prisma.section.findMany({
      where,
      skip,
      take: limit,
      orderBy: { order: "asc" },
      include: {
        _count: {
          select: { lessons: true }
        }
      }
    }),
    prisma.section.count({ where }),
  ]);

  return SuccessResponse(res, "Sections fetched successfully", { 
    sections,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    }
  });
});

/**
 * @desc    Get section by ID
 * @route   GET /api/v1/sections/:id
 */
export const getSectionById = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;

  const section = await prisma.section.findUnique({
    where: { id },
    include: {
      subject: true,
      lessons: {
        orderBy: { order: "asc" }
      }
    }
  });

  if (!section) return next(new ErrorResponse("Section not found", 404));

  return SuccessResponse(res, "Section fetched successfully", { section });
});

/**
 * @desc    Update section
 * @route   PUT /api/v1/sections/:id
 */
export const updateSection = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;
  const validation = updateSectionValidation.parse(req.body);

  const existing = await prisma.section.findUnique({ where: { id } });
  if (!existing) return next(new ErrorResponse("Section not found", 404));

  const section = await prisma.section.update({
    where: { id },
    data: removeUndefined(validation) as Prisma.SectionUpdateInput,
  });

  return SuccessResponse(res, "Section updated successfully", { section });
});

/**
 * @desc    Delete section
 * @route   DELETE /api/v1/sections/:id
 */
export const deleteSection = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;

  const existing = await prisma.section.findUnique({ where: { id } });
  if (!existing) return next(new ErrorResponse("Section not found", 404));

  await prisma.section.delete({ where: { id } });

  return SuccessResponse(res, "Section deleted successfully", null);
});
