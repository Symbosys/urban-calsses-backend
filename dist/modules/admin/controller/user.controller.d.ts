/**
 * @desc    Get all users (Students/Instructors/Admins)
 * @route   GET /api/v1/admin/users
 * @access  Admin
 */
export declare const getAllUsersAdmin: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Verify or Unverify a user/instructor
 * @route   PATCH /api/v1/admin/users/:id/verify
 * @access  Admin
 */
export declare const toggleUserVerification: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Block or Unblock a user/instructor
 * @route   PATCH /api/v1/admin/users/:id/block
 * @access  Admin
 */
export declare const toggleUserBlock: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=user.controller.d.ts.map