import { verifyToken } from "../utils/jwt.util.js";
import { ErrorResponse } from "../utils/response.util.js";
import { prisma } from "../config/prisma.js";
import { asyncHandler } from "./error.middleware.js";
export const protect = asyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
        return next(new ErrorResponse("Not authorized to access this route", 401));
    }
    try {
        const decoded = verifyToken(token);
        if (!decoded || !decoded.accountId) {
            return next(new ErrorResponse("Not authorized to access this route", 401));
        }
        const account = await prisma.account.findUnique({
            where: { id: decoded.accountId },
            include: {
                student: true,
                instructor: true,
                admin: true,
            },
        });
        if (!account) {
            return next(new ErrorResponse("Account not found", 404));
        }
        // Determine the profile (normalize req.user)
        let profile = account.student || account.instructor || account.admin;
        if (!profile) {
            return next(new ErrorResponse("Profile not found associated with this account", 404));
        }
        // Attach role to profile.account for backward compatibility with authorize()
        profile.account = { role: account.role };
        req.user = profile;
        next();
    }
    catch (error) {
        return next(new ErrorResponse("Not authorized to access this route", 401));
    }
});
/**
 * Grant access to specific roles
 */
export const authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.account.role)) {
            return next(new ErrorResponse(`User role ${req.user.account.role} is not authorized to access this route`, 403));
        }
        next();
    };
};
//# sourceMappingURL=auth.middleware.js.map