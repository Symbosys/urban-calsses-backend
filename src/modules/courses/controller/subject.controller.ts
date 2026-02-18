import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse, ErrorResponse } from "../../../utils/response.util.js";
import { subjectValidation, updateSubjectValidation } from "../validation/subject.validation.js";
import { removeUndefined } from "../../../utils/utils.js";
import type { Prisma } from "../../../../generated/prisma/client.js";

/**
 * @desc    Create a new subject
 * @route   POST /api/v1/subjects
 */
export const createSubject = asyncHandler(async (req, res, next) => {
  const validation = subjectValidation.parse(req.body);

  const subject = await prisma.subject.create({
    data: validation as Prisma.SubjectUncheckedCreateInput,
    include: {
      course: {
        select: { title: true }
      }
    }
  });

  return SuccessResponse(res, "Subject created successfully", { subject }, 201);
});

/**
 * @desc    Get all subjects (optional filter by courseId) with pagination
 * @route   GET /api/v1/subjects
 */
export const getAllSubjects = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const courseId = req.query.courseId as string;
  const skip = (page - 1) * limit;

  const where: Prisma.SubjectWhereInput = courseId ? { courseId } : {};

  const [subjects, total] = await Promise.all([
    prisma.subject.findMany({
      where,
      skip,
      take: limit,
      orderBy: { order: "asc" },
      include: {
        _count: {
          select: { sections: true }
        }
      }
    }),
    prisma.subject.count({ where }),
  ]);

  return SuccessResponse(res, "Subjects fetched successfully", { 
    subjects,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    }
  });
});

/**
 * @desc    Get subject by ID
 * @route   GET /api/v1/subjects/:id
 */
export const getSubjectById = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;

  const subject = await prisma.subject.findUnique({
    where: { id },
    include: {
      course: true,
      sections: {
        orderBy: { order: "asc" },
        include: {
          lessons: {
            orderBy: { order: "asc" }
          }
        }
      }
    }
  });

  if (!subject) return next(new ErrorResponse("Subject not found", 404));

  return SuccessResponse(res, "Subject fetched successfully", { subject });
});

/**
 * @desc    Update subject
 * @route   PUT /api/v1/subjects/:id
 */
export const updateSubject = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;
  const validation = updateSubjectValidation.parse(req.body);

  const existing = await prisma.subject.findUnique({ where: { id } });
  if (!existing) return next(new ErrorResponse("Subject not found", 404));

  const subject = await prisma.subject.update({
    where: { id },
    data: removeUndefined(validation) as Prisma.SubjectUpdateInput,
  });

  return SuccessResponse(res, "Subject updated successfully", { subject });
});

/**
 * @desc    Delete subject
 * @route   DELETE /api/v1/subjects/:id
 */
export const deleteSubject = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;

  const existing = await prisma.subject.findUnique({ where: { id } });
  if (!existing) return next(new ErrorResponse("Subject not found", 404));

  await prisma.subject.delete({ where: { id } });

  return SuccessResponse(res, "Subject deleted successfully", null);
});
