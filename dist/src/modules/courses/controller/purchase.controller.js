import crypto from "crypto";
import razorpay from "../../../config/razorpay.js";
import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { SuccessResponse, ErrorResponse } from "../../../utils/response.util.js";
import ENV from "../../../config/env.js";
/**
 * @desc    Initiate course purchase (Create Razorpay Order)
 * @route   POST /api/v1/courses/purchase
 * @access  Private (Student)
 */
export const checkout = asyncHandler(async (req, res, next) => {
    const { courseId } = req.body;
    const userId = req.user.id;
    if (!courseId) {
        return next(new ErrorResponse("Course ID is required", 400));
    }
    // 1. Check if course exists
    const course = await prisma.course.findUnique({
        where: { id: courseId },
    });
    if (!course) {
        return next(new ErrorResponse("Course not found", 404));
    }
    // 2. Check if user is already enrolled
    const existingEnrollment = await prisma.enrollment.findUnique({
        where: {
            userId_courseId: {
                userId,
                courseId,
            },
        },
    });
    if (existingEnrollment) {
        return next(new ErrorResponse("You are already enrolled in this course", 400));
    }
    // 3. Determine amount (Industry best practice: Always check prices on the backend)
    const amount = course.discountPrice || course.price;
    if (amount <= 0) {
        // If course is free, we could handle it differently (direct enrollment)
        // For now, let's assume we proceed with the payment flow if amount is > 0
        return next(new ErrorResponse("Free courses cannot be purchased this way", 400));
    }
    // 4. Create Razorpay Order
    const options = {
        amount: Math.round(amount * 100), // Razorpay expects amount in paise
        currency: "INR",
        receipt: `receipt_${Date.now()}_${courseId.substring(0, 5)}`,
    };
    try {
        const razorpayOrder = await razorpay.orders.create(options);
        // 5. Save local Order in PENDING status
        const order = await prisma.order.create({
            data: {
                userId,
                courseId,
                amount,
                totalAmount: amount,
                status: "PENDING",
                orderNumber: razorpayOrder.id, // Using Razorpay order ID as our local reference for easy lookup
                paymentMethod: "Razorpay",
            },
        });
        return SuccessResponse(res, "Order initiated", {
            order_id: razorpayOrder.id,
            amount: razorpayOrder.amount,
            currency: razorpayOrder.currency,
            course_title: course.title,
            key_id: ENV.RAZORPAY_KEY_ID,
        });
    }
    catch (error) {
        console.error("Razorpay Order Creation Error:", error);
        return next(new ErrorResponse(error.message || "Failed to create payment order", 500));
    }
});
/**
 * @desc    Verify Razorpay payment signature & Complete enrollment
 * @route   POST /api/v1/courses/purchase/verify
 * @access  Private (Student)
 */
export const verifyPayment = asyncHandler(async (req, res, next) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const userId = req.user.id;
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
        return next(new ErrorResponse("Payment details missing", 400));
    }
    // 1. Verify Signature
    const generatedSignature = crypto
        .createHmac("sha256", ENV.RAZORPAY_KEY_SECRET)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest("hex");
    const isVerified = generatedSignature === razorpay_signature;
    if (!isVerified) {
        // Mark order as FAILED locally
        await prisma.order.updateMany({
            where: { orderNumber: razorpay_order_id, userId },
            data: { status: "FAILED" },
        });
        return next(new ErrorResponse("Payment verification failed", 400));
    }
    // 2. Fetch the corresponding Order
    const order = await prisma.order.findFirst({
        where: {
            orderNumber: razorpay_order_id,
            userId,
            status: "PENDING"
        },
    });
    if (!order) {
        return next(new ErrorResponse("Order not found or already processed", 404));
    }
    // 3. Complete Purchase & Enrollment in a transaction (Atomic operation)
    try {
        await prisma.$transaction(async (tx) => {
            // a. Update Order status
            await tx.order.update({
                where: { id: order.id },
                data: {
                    status: "COMPLETED",
                    paymentId: razorpay_payment_id,
                },
            });
            // b. Create Enrollment
            await tx.enrollment.create({
                data: {
                    userId: order.userId,
                    courseId: order.courseId,
                    status: "ACTIVE",
                    enrolledAt: new Date(),
                },
            });
        });
        return SuccessResponse(res, "Course purchased successfully", {
            courseId: order.courseId,
        });
    }
    catch (error) {
        console.error("Payment Verification Error:", error);
        return next(new ErrorResponse("Payment successful, but enrollment failed. Please contact support.", 500));
    }
});
/**
 * @desc    Check if user is enrolled in a course
 * @route   GET /api/v1/purchase/check/:courseId
 * @access  Private (Student)
 */
export const checkEnrollment = asyncHandler(async (req, res, next) => {
    const { courseId } = req.params;
    const userId = req.user.id;
    const enrollment = await prisma.enrollment.findUnique({
        where: {
            userId_courseId: {
                userId,
                courseId,
            },
        },
    });
    return SuccessResponse(res, "Enrollment status fetched", {
        isEnrolled: !!enrollment,
    });
});
//# sourceMappingURL=purchase.controller.js.map