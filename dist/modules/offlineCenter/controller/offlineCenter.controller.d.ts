/**
 * @desc    Create a new offline center
 * @route   POST /api/v1/offline-centers
 * @access  Admin
 */
export declare const createOfflineCenter: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get all offline centers
 * @route   GET /api/v1/offline-centers
 * @access  Public
 */
export declare const getAllOfflineCenters: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get offline center by ID
 * @route   GET /api/v1/offline-centers/:id
 * @access  Public
 */
export declare const getOfflineCenterById: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Update offline center
 * @route   PATCH /api/v1/offline-centers/:id
 * @access  Admin
 */
export declare const updateOfflineCenter: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Delete offline center
 * @route   DELETE /api/v1/offline-centers/:id
 * @access  Admin
 */
export declare const deleteOfflineCenter: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=offlineCenter.controller.d.ts.map