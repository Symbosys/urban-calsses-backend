import multer from "multer";
/**
 * ✅ DEFAULT EXPORT (DOES NOT BREAK ANYTHING)
 * Existing code keeps working → 2MB
 */
export declare const Upload: multer.Multer;
/**
 * ✅ SAME SYSTEM, CUSTOM SIZE
 */
export declare const UploadCustom: (size: number, unit: "kb" | "mb") => multer.Multer;
//# sourceMappingURL=multter.middleware.d.ts.map