import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse, ErrorResponse } from "../../../utils/response.util.js";
import { toggleWishlistValidation } from "../validation/wishlist.validation.js";

/**
 * @desc    Toggle course in wishlist (Add if not present, Remove if present)
 * @route   POST /api/v1/wishlist/toggle
 * @access  Student
 */
export const toggleWishlist = asyncHandler(async (req, res, next) => {
  const { courseId, userId } = toggleWishlistValidation.parse(req.body);

  // 1. Check if course exists
  const course = await prisma.course.findUnique({ where: { id: courseId } });
  if (!course) {
    return next(new ErrorResponse("Course not found", 404));
  }

  // 2. Check if already in wishlist
  const existingItem = await prisma.wishlist.findUnique({
    where: {
      userId_courseId: { userId, courseId }
    }
  });

  if (existingItem) {
    // Remove from wishlist
    await prisma.wishlist.delete({
      where: {
        userId_courseId: { userId, courseId }
      }
    });
    return SuccessResponse(res, "Course removed from wishlist", { isInWishlist: false });
  } else {
    // Add to wishlist
    const newItem = await prisma.wishlist.create({
      data: { userId, courseId }
    });
    return SuccessResponse(res, "Course added to wishlist", { newItem, isInWishlist: true });
  }
});

/**
 * @desc    Get user's wishlist
 * @route   GET /api/v1/wishlist
 * @access  Student
 */
export const getMyWishlist = asyncHandler(async (req, res, next) => {
  const userId = req.query.userId as string; // From query for now
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const skip = (page - 1) * limit;

  if (!userId) {
    return next(new ErrorResponse("User ID is required", 400));
  }

  const [wishlistItems, total] = await Promise.all([
    prisma.wishlist.findMany({
      where: { userId },
      include: {
        course: {
          select: {
            id: true,
            title: true,
            slug: true,
            thumbnail: true,
            price: true,
            discountPrice: true,
            status: true,
            instructors: {
              include: {
                instructor: {
                  select: { name: true }
                }
              }
            }
          }
        }
      },
      skip,
      take: limit,
      orderBy: { createdAt: "desc" }
    }),
    prisma.wishlist.count({ where: { userId } })
  ]);

  return SuccessResponse(res, "Wishlist fetched successfully", {
    wishlist: wishlistItems.map(item => item.course),
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    }
  });
});

/**
 * @desc    Check if a course is in user's wishlist
 * @route   GET /api/v1/wishlist/check/:courseId
 * @access  Student
 */
export const checkWishlistStatus = asyncHandler(async (req, res, next) => {
  const courseId = req.params.courseId as string;
  const userId = req.query.userId as string;

  if (!userId) {
    return next(new ErrorResponse("User ID is required", 400));
  }

  const existingItem = await prisma.wishlist.findUnique({
    where: {
      userId_courseId: { userId, courseId }
    }
  });

  return SuccessResponse(res, "Wishlist status checked", { isInWishlist: !!existingItem });
});

/**
 * @desc    Clear all items from wishlist
 * @route   DELETE /api/v1/wishlist/clear
 * @access  Student
 */
export const clearWishlist = asyncHandler(async (req, res, next) => {
  const userId = req.body.userId as string;

  if (!userId) {
    return next(new ErrorResponse("User ID is required", 400));
  }

  await prisma.wishlist.deleteMany({
    where: { userId }
  });

  return SuccessResponse(res, "Wishlist cleared successfully", null);
});
