/**
 * @desc    Create a new section
 * @route   POST /api/v1/sections
 */
export declare const createSection: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get all sections (optional filter by subjectId) with pagination
 * @route   GET /api/v1/sections
 */
export declare const getAllSections: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get section by ID
 * @route   GET /api/v1/sections/:id
 */
export declare const getSectionById: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Update section
 * @route   PUT /api/v1/sections/:id
 */
export declare const updateSection: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Delete section
 * @route   DELETE /api/v1/sections/:id
 */
export declare const deleteSection: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=section.controller.d.ts.map