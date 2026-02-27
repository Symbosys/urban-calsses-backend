/**
 * @desc    Create a new coupon
 * @route   POST /api/v1/admin/coupons
 * @access  Admin
 */
export declare const createCoupon: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get all coupons
 * @route   GET /api/v1/admin/coupons
 * @access  Admin
 */
export declare const getAllCoupons: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Update a coupon
 * @route   PATCH /api/v1/admin/coupons/:id
 * @access  Admin
 */
export declare const updateCoupon: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Delete a coupon
 * @route   DELETE /api/v1/admin/coupons/:id
 * @access  Admin
 */
export declare const deleteCoupon: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=coupon.controller.d.ts.map