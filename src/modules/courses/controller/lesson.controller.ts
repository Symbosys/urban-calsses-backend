import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse, ErrorResponse } from "../../../utils/response.util.js";
import { lessonValidation, updateLessonValidation } from "../validation/lesson.validation.js";
import { removeUndefined } from "../../../utils/utils.js";
import type { Prisma } from "../../../../generated/prisma/client.js";

/**
 * @desc    Create a new lesson
 * @route   POST /api/v1/lessons
 */
export const createLesson = asyncHandler(async (req, res, next) => {
  const validation = lessonValidation.parse(req.body);

  const lesson = await prisma.lesson.create({
    data: validation as Prisma.LessonUncheckedCreateInput,
    include: {
      section: {
        select: { title: true }
      }
    }
  });

  return SuccessResponse(res, "Lesson created successfully", { lesson }, 201);
});

/**
 * @desc    Get all lessons (optional filter by sectionId)
 * @route   GET /api/v1/lessons
 */
export const getAllLessons = asyncHandler(async (req, res, next) => {
  const sectionId = req.query.sectionId as string;

  const where: Prisma.LessonWhereInput = sectionId ? { sectionId } : {};

  const lessons = await prisma.lesson.findMany({
    where,
    orderBy: { order: "asc" },
    include: {
      section: {
        select: { title: true, id: true },
      },
    },
  });

  return SuccessResponse(res, "Lessons fetched successfully", { lessons });
});

/**
 * @desc    Get lesson by ID
 * @route   GET /api/v1/lessons/:id
 */
export const getLessonById = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;

  const lesson = await prisma.lesson.findUnique({
    where: { id },
    include: {
      section: {
        include: {
          subject: {
            include: {
              course: true
            }
          }
        }
      }
    }
  });

  if (!lesson) return next(new ErrorResponse("Lesson not found", 404));

  return SuccessResponse(res, "Lesson fetched successfully", { lesson });
});

/**
 * @desc    Update lesson
 * @route   PUT /api/v1/lessons/:id
 */
export const updateLesson = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;
  const validation = updateLessonValidation.parse(req.body);

  const existing = await prisma.lesson.findUnique({ where: { id } });
  if (!existing) return next(new ErrorResponse("Lesson not found", 404));

  const lesson = await prisma.lesson.update({
    where: { id },
    data: removeUndefined(validation) as Prisma.LessonUpdateInput,
  });

  return SuccessResponse(res, "Lesson updated successfully", { lesson });
});

/**
 * @desc    Delete lesson
 * @route   DELETE /api/v1/lessons/:id
 */
export const deleteLesson = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;

  const existing = await prisma.lesson.findUnique({ where: { id } });
  if (!existing) return next(new ErrorResponse("Lesson not found", 404));

  await prisma.lesson.delete({ where: { id } });

  return SuccessResponse(res, "Lesson deleted successfully", null);
});
