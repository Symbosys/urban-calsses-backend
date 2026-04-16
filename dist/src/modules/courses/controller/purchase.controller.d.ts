/**
 * @desc    Initiate course purchase (Create Razorpay Order)
 * @route   POST /api/v1/courses/purchase
 * @access  Private (Student)
 */
export declare const checkout: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Verify Razorpay payment signature & Complete enrollment
 * @route   POST /api/v1/courses/purchase/verify
 * @access  Private (Student)
 */
export declare const verifyPayment: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Check if user is enrolled in a course
 * @route   GET /api/v1/purchase/check/:courseId
 * @access  Private (Student)
 */
export declare const checkEnrollment: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=purchase.controller.d.ts.map