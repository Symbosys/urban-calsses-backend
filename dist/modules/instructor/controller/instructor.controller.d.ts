/**
 * @desc    Get all instructors with pagination and search
 * @route   GET /api/v1/instructors
 * @access  Public
 */
export declare const getAllInstructors: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get instructor by ID with courses
 * @route   GET /api/v1/instructors/:id
 * @access  Public
 */
export declare const getInstructorById: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Create a new instructor (Admin)
 * @route   POST /api/v1/instructors
 * @access  Admin
 */
export declare const createInstructor: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Update instructor details
 * @route   PUT /api/v1/instructors/:id
 * @access  Admin/Self
 */
export declare const updateInstructor: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Delete instructor
 * @route   DELETE /api/v1/instructors/:id
 * @access  Admin
 */
export declare const deleteInstructor: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=instructor.controller.d.ts.map