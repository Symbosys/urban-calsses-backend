import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse, ErrorResponse } from "../../../utils/response.util.js";
import { updateLessonProgressValidation } from "../validation/lesson-progress.validation.js";
import type { Prisma } from "../../../../generated/prisma/client.js";

/**
 * @desc    Update or create lesson progress
 * @route   POST /api/v1/user/lesson-progress
 */
export const updateLessonProgress = asyncHandler(async (req, res, next) => {
  const { lessonId, isCompleted } = updateLessonProgressValidation.parse(req.body);
  const userId = req.body.userId; // In a real app, this would come from auth middleware (req.user.id)

  if (!userId) {
      return next(new ErrorResponse("User ID is required", 400));
  }

  const progress = await prisma.lessonProgress.upsert({
    where: {
      userId_lessonId: {
        userId,
        lessonId,
      },
    },
    update: {
      isCompleted,
      completedAt: isCompleted ? new Date() : null,
    },
    create: {
      userId,
      lessonId,
      isCompleted,
      completedAt: isCompleted ? new Date() : null,
    },
  });

  return SuccessResponse(res, "Lesson progress updated successfully", { progress });
});

/**
 * @desc    Get progress for a specific lesson
 * @route   GET /api/v1/user/lesson-progress/:lessonId
 */
export const getLessonProgress = asyncHandler(async (req, res, next) => {
  const lessonId = req.params.lessonId as string;
  const userId = req.query.userId as string; // From query for now, usually from auth

  if (!userId) {
      return next(new ErrorResponse("User ID is required", 400));
  }

  const progress = await prisma.lessonProgress.findUnique({
    where: {
      userId_lessonId: {
        userId,
        lessonId,
      },
    },
  });

  return SuccessResponse(res, "Lesson progress fetched successfully", { progress });
});

/**
 * @desc    Get all progress for a user in a specific course
 * @route   GET /api/v1/user/course-progress/:courseId
 */
export const getCourseProgress = asyncHandler(async (req, res, next) => {
  const courseId = req.params.courseId as string;
  const userId = req.query.userId as string;

  if (!userId) {
      return next(new ErrorResponse("User ID is required", 400));
  }

  // Find all lessons for this course
  const lessons = await prisma.lesson.findMany({
    where: {
      section: {
        subject: {
          courseId,
        },
      },
    },
    select: {
      id: true,
    },
  });

  const lessonIds = lessons.map((l) => l.id);

  const completedProgress = await prisma.lessonProgress.findMany({
    where: {
      userId,
      lessonId: { in: lessonIds },
      isCompleted: true,
    },
  });

  const totalLessons = lessonIds.length;
  const completedCount = completedProgress.length;
  const percentage = totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0;

  return SuccessResponse(res, "Course progress fetched successfully", {
    courseId,
    totalLessons,
    completedCount,
    percentage: parseFloat(percentage.toFixed(2)),
    completedLessonIds: completedProgress.map((p) => p.lessonId),
  });
});
