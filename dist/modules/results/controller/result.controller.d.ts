/**
 * @desc    Create a new result
 * @route   POST /api/v1/results
 * @access  Admin
 */
export declare const createResult: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get all results with filtering
 * @route   GET /api/v1/results
 * @access  Public
 */
export declare const getAllResults: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get result by ID
 * @route   GET /api/v1/results/:id
 * @access  Public
 */
export declare const getResultById: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Update result
 * @route   PATCH /api/v1/results/:id
 * @access  Admin
 */
export declare const updateResult: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Delete result
 * @route   DELETE /api/v1/results/:id
 * @access  Admin
 */
export declare const deleteResult: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=result.controller.d.ts.map