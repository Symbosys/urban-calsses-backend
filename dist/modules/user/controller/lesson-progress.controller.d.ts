/**
 * @desc    Update or create lesson progress
 * @route   POST /api/v1/user/lesson-progress
 */
export declare const updateLessonProgress: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get progress for a specific lesson
 * @route   GET /api/v1/user/lesson-progress/:lessonId
 */
export declare const getLessonProgress: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get all progress for a user in a specific course
 * @route   GET /api/v1/user/course-progress/:courseId
 */
export declare const getCourseProgress: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=lesson-progress.controller.d.ts.map