/**
 * @desc    Create a new banner
 * @route   POST /api/v1/admin/banners
 * @access  Admin
 */
export declare const createBanner: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get all banners
 * @route   GET /api/v1/admin/banners
 * @access  Admin/Public
 */
export declare const getAllBanners: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Update a banner
 * @route   PATCH /api/v1/admin/banners/:id
 * @access  Admin
 */
export declare const updateBanner: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Delete a banner
 * @route   DELETE /api/v1/admin/banners/:id
 * @access  Admin
 */
export declare const deleteBanner: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=banner.controller.d.ts.map