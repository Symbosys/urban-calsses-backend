import type { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.util.js";
import { ErrorResponse } from "../utils/response.util.js";
import { prisma } from "../config/prisma.js";
import { asyncHandler } from "./error.middleware.js";

interface JwtPayload {
  id: string;
  accountId: string;
  role: string;
}

export const protect = asyncHandler(async (req: any, res: Response, next: NextFunction) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }

  try {
    const decoded = verifyToken(token) as JwtPayload;

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
      return next(new ErrorResponse("Account not found. Please log in again.", 401));
    }

    // Determine the profile (normalize req.user)
    let profile: any = account.student || account.instructor || account.admin;
    
    if (!profile) {
      return next(new ErrorResponse("Profile not found associated with this account", 401));
    }

    // Attach role to profile.account for backward compatibility with authorize()
    profile.account = { role: account.role };
    
    req.user = profile;
    next();
  } catch (error) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }
});

/**
 * Grant access to specific roles
 */
export const authorize = (...roles: string[]) => {
  return (req: any, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user.account.role)) {
      return next(
        new ErrorResponse(
          `User role ${req.user.account.role} is not authorized to access this route`,
          403
        )
      );
    }
    next();
  };
};
