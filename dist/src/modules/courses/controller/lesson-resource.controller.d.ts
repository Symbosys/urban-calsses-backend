/**
 * @desc    Add a resource to a lesson
 * @route   POST /api/v1/lessons/resources
 * @access  Instructor/Admin
 */
export declare const addResource: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get all resources for a lesson
 * @route   GET /api/v1/lessons/:lessonId/resources
 * @access  Public (Enrolled Students)
 */
export declare const getLessonResources: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Update a lesson resource
 * @route   PATCH /api/v1/lessons/resources/:id
 * @access  Instructor/Admin
 */
export declare const updateResource: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Delete a lesson resource
 * @route   DELETE /api/v1/lessons/resources/:id
 * @access  Instructor/Admin
 */
export declare const deleteResource: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=lesson-resource.controller.d.ts.map