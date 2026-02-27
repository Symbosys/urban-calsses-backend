/**
 * @desc    Get all courses with detailed status (Review/Draft/Published)
 * @route   GET /api/v1/admin/courses
 * @access  Admin
 */
export declare const getAllCoursesAdmin: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Verify/Approve a course
 * @route   PATCH /api/v1/admin/courses/:id/status
 * @access  Admin
 */
export declare const updateCourseStatus: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Toggle feature status of a course
 * @route   PATCH /api/v1/admin/courses/:id/feature
 * @access  Admin
 */
export declare const toggleCourseFeature: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=course.controller.d.ts.map