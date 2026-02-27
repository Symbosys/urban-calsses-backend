/**
 * @desc    Create a new course
 * @route   POST /api/v1/courses
 * @access  Admin/Instructor
 */
export declare const createCourse: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get all courses with pagination, search and filters
 * @route   GET /api/v1/courses
 * @access  Public
 */
export declare const getAllCourses: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get course by ID
 * @route   GET /api/v1/courses/:id
 * @access  Public/Private
 */
export declare const getCourseById: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get course by slug
 * @route   GET /api/v1/courses/slug/:slug
 * @access  Public
 */
export declare const getCourseBySlug: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Update course
 * @route   PUT /api/v1/courses/:id
 * @access  Admin/Instructor
 */
export declare const updateCourse: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Delete course
 * @route   DELETE /api/v1/courses/:id
 * @access  Admin
 */
export declare const deleteCourse: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=course.controller.d.ts.map