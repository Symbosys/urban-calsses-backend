/**
 * @desc    Create a new subject
 * @route   POST /api/v1/subjects
 */
export declare const createSubject: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get all subjects (optional filter by courseId) with pagination
 * @route   GET /api/v1/subjects
 */
export declare const getAllSubjects: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get subject by ID
 * @route   GET /api/v1/subjects/:id
 */
export declare const getSubjectById: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Update subject
 * @route   PUT /api/v1/subjects/:id
 */
export declare const updateSubject: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Delete subject
 * @route   DELETE /api/v1/subjects/:id
 */
export declare const deleteSubject: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=subject.controller.d.ts.map