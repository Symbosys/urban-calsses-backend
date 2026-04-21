import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse, ErrorResponse } from "../../../utils/response.util.js";

/**
 * @desc    Get all tests with filters
 * @route   GET /api/v1/tests
 * @access  Protected
 */
export const getAllTests = asyncHandler(async (req, res, next) => {
  const { type, status, subject } = req.query;

  const where: any = {};
  if (type) where.type = type;
  if (status) where.status = status;
  if (subject) where.subject = { contains: subject as string, mode: 'insensitive' };

  const tests = await (prisma as any).test.findMany({
    where,
    orderBy: { createdAt: 'desc' },
    include: {
      course: {
        select: {
          id: true,
          title: true,
        },
      },
    },
  });

  return SuccessResponse(res, "Tests fetched successfully", { tests });
});

/**
 * @desc    Get test by ID
 * @route   GET /api/v1/tests/:id
 * @access  Protected
 */
export const getTestById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const test = await (prisma as any).test.findUnique({
    where: { id },
    include: {
      course: true,
    },
  });

  if (!test) {
    return next(new ErrorResponse("Test not found", 404));
  }

  return SuccessResponse(res, "Test fetched successfully", { test });
});

/**
 * @desc    Create a test (Admin only usually)
 * @route   POST /api/v1/tests
 * @access  Admin
 */
export const createTest = asyncHandler(async (req, res, next) => {
  const testData = req.body;

  const test = await (prisma as any).test.create({
    data: testData,
  });

  return SuccessResponse(res, "Test created successfully", { test }, 201);
});
