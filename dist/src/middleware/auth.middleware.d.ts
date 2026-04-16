import type { NextFunction, Request, Response } from "express";
export declare const protect: (req: Request, res: Response, next: NextFunction) => void;
/**
 * Grant access to specific roles
 */
export declare const authorize: (...roles: string[]) => (req: any, res: Response, next: NextFunction) => void;
//# sourceMappingURL=auth.middleware.d.ts.map