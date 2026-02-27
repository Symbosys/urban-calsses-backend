/**
 * @desc    Create a new blog post
 * @route   POST /api/v1/blogs
 * @access  Admin/Instructor
 */
export declare const createBlog: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get all blogs
 * @route   GET /api/v1/blogs
 * @access  Public
 */
export declare const getBlogs: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get blog by ID
 * @route   GET /api/v1/blogs/:id
 * @access  Public
 */
export declare const getBlog: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Update blog post
 * @route   PATCH /api/v1/blogs/:id
 * @access  Admin/Instructor
 */
export declare const updateBlog: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Delete blog post
 * @route   DELETE /api/v1/blogs/:id
 * @access  Admin
 */
export declare const deleteBlog: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=blog.controller.d.ts.map