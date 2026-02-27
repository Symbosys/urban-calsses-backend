/**
 * @desc    Get all users with pagination and optional search
 * @route   GET /api/v1/users
 * @access  Admin
 */
export declare const getAllUsers: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get user by ID
 * @route   GET /api/v1/users/:id
 * @access  Admin
 */
export declare const getUserById: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Update user
 * @route   PUT /api/v1/users/:id
 * @access  Admin/Self
 */
export declare const updateUser: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Delete user
 * @route   DELETE /api/v1/users/:id
 * @access  Admin
 */
export declare const deleteUser: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=user.controller.d.ts.map