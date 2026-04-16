/**
 * @desc    Create a new offline batch
 * @route   POST /api/v1/offline-batches
 * @access  Admin
 */
export declare const createOfflineBatch: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get all offline batches
 * @route   GET /api/v1/offline-batches
 * @access  Public
 */
export declare const getAllOfflineBatches: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get offline batch by ID
 * @route   GET /api/v1/offline-batches/:id
 * @access  Public
 */
export declare const getOfflineBatchById: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Update offline batch
 * @route   PATCH /api/v1/offline-batches/:id
 * @access  Admin
 */
export declare const updateOfflineBatch: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Delete offline batch
 * @route   DELETE /api/v1/offline-batches/:id
 * @access  Admin
 */
export declare const deleteOfflineBatch: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=offlineBatch.controller.d.ts.map