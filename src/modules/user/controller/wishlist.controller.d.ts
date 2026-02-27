/**
 * @desc    Toggle course in wishlist (Add if not present, Remove if present)
 * @route   POST /api/v1/wishlist/toggle
 * @access  Student
 */
export declare const toggleWishlist: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get user's wishlist
 * @route   GET /api/v1/wishlist
 * @access  Student
 */
export declare const getMyWishlist: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Check if a course is in user's wishlist
 * @route   GET /api/v1/wishlist/check/:courseId
 * @access  Student
 */
export declare const checkWishlistStatus: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Clear all items from wishlist
 * @route   DELETE /api/v1/wishlist/clear
 * @access  Student
 */
export declare const clearWishlist: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=wishlist.controller.d.ts.map