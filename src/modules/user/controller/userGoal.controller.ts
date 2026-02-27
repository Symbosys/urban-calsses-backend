import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse, ErrorResponse } from "../../../utils/response.util.js";
import { setUserGoalsValidation, getUserGoalsValidation } from "../validation/userGoal.validation.js";

/**
 * @desc    Set/Update user goals
 * @route   POST /api/v1/user-goals
 */
export const setUserGoals = asyncHandler(async (req, res, next) => {
  const { userId, subCategoryIds } = setUserGoalsValidation.parse(req.body);

  // Check if user exists
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    return next(new ErrorResponse("User not found", 404));
  }

  // Verify all subcategories exist
  const existingSubCategories = await prisma.subCategory.findMany({
    where: { id: { in: subCategoryIds } },
    select: { id: true },
  });

  if (existingSubCategories.length !== subCategoryIds.length) {
    return next(new ErrorResponse("One or more subcategories are invalid", 400));
  }

  // Update goals in a transaction: delete old ones and create new ones
  const result = await prisma.$transaction(async (tx) => {
    // Delete existing goals
    await tx.userGoal.deleteMany({
      where: { userId },
    });

    // Create new goals
    const newGoals = await Promise.all(
      subCategoryIds.map((subCategoryId) =>
        tx.userGoal.create({
          data: {
            userId,
            subCategoryId,
          },
          include: {
            subCategory: true,
          },
        })
      )
    );

    return newGoals;
  });

  return SuccessResponse(res, "User goals updated successfully", { goals: result });
});

/**
 * @desc    Get user goals
 * @route   GET /api/v1/user-goals/:userId
 */
export const getUserGoals = asyncHandler(async (req, res, next) => {
  const { userId } = getUserGoalsValidation.parse({ userId: req.params.userId || req.query.userId });

  const goals = await prisma.userGoal.findMany({
    where: { userId },
    include: {
      subCategory: {
        include: {
          category: true,
        },
      },
    },
  });

  return SuccessResponse(res, "User goals fetched successfully", { goals });
});
