import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse, ErrorResponse } from "../../../utils/response.util.js";
import { createResourceValidation, updateResourceValidation } from "../validation/lesson-resource.validation.js";

/**
 * @desc    Add a resource to a lesson
 * @route   POST /api/v1/lessons/resources
 * @access  Instructor/Admin
 */
export const addResource = asyncHandler(async (req, res, next) => {
  const validation = createResourceValidation.parse(req.body);

  const lesson = await prisma.lesson.findUnique({ where: { id: validation.lessonId } });
  if (!lesson) {
    return next(new ErrorResponse("Lesson not found", 404));
  }

  const resource = await prisma.lessonResource.create({
    data: {
      title: validation.title,
      file: validation.file,
      lessonId: validation.lessonId
    }
  });

  return SuccessResponse(res, "Lesson resource added successfully", { resource });
});

/**
 * @desc    Get all resources for a lesson
 * @route   GET /api/v1/lessons/:lessonId/resources
 * @access  Public (Enrolled Students)
 */
export const getLessonResources = asyncHandler(async (req, res, next) => {
  const lessonId = req.params.lessonId as string;

  const resources = await prisma.lessonResource.findMany({
    where: { lessonId },
    orderBy: { createdAt: "asc" }
  });

  return SuccessResponse(res, "Lesson resources fetched successfully", { resources });
});

/**
 * @desc    Update a lesson resource
 * @route   PATCH /api/v1/lessons/resources/:id
 * @access  Instructor/Admin
 */
export const updateResource = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;
  const validation = updateResourceValidation.parse(req.body);

  const existing = await prisma.lessonResource.findUnique({ where: { id } });
  if (!existing) {
    return next(new ErrorResponse("Resource not found", 404));
  }

  const updateData: any = {};
  if (validation.title !== undefined) updateData.title = validation.title;

  const updated = await prisma.lessonResource.update({
    where: { id },
    data: updateData
  });

  return SuccessResponse(res, "Lesson resource updated successfully", { resource: updated });
});

/**
 * @desc    Delete a lesson resource
 * @route   DELETE /api/v1/lessons/resources/:id
 * @access  Instructor/Admin
 */
export const deleteResource = asyncHandler(async (req, res, next) => {
  const id = req.params.id as string;

  const existing = await prisma.lessonResource.findUnique({ where: { id } });
  if (!existing) {
    return next(new ErrorResponse("Resource not found", 404));
  }

  await prisma.lessonResource.delete({ where: { id } });

  return SuccessResponse(res, "Lesson resource deleted successfully", null);
});
