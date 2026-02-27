/**
 * @desc    Create a new lesson
 * @route   POST /api/v1/lessons
 */
export declare const createLesson: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get all lessons (optional filter by sectionId)
 * @route   GET /api/v1/lessons
 */
export declare const getAllLessons: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get lesson by ID
 * @route   GET /api/v1/lessons/:id
 */
export declare const getLessonById: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Update lesson
 * @route   PUT /api/v1/lessons/:id
 */
export declare const updateLesson: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Delete lesson
 * @route   DELETE /api/v1/lessons/:id
 */
export declare const deleteLesson: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=lesson.controller.d.ts.map