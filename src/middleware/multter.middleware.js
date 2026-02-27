import multer from "multer";
const storage = multer.memoryStorage();
const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp"];
/**
 * 🔹 CENTRALIZED BYTE CONVERTER
 */
const toBytes = (size, unit) => {
    if (unit === "kb")
        return size * 1024;
    if (unit === "mb")
        return size * 1024 * 1024;
    throw new Error("Invalid unit. Use 'kb' or 'mb'");
};
/**
 * 🔹 CENTRALIZED MULTER CREATOR
 */
const createUpload = (size = 2, unit = "mb") => multer({
    storage,
    limits: {
        fileSize: toBytes(size, unit),
    },
    fileFilter: (_, file, cb) => {
        allowedMimeTypes.includes(file.mimetype)
            ? cb(null, true)
            : cb(new Error("Only JPEG, PNG, and WEBP images are allowed"));
    },
});
/**
 * ✅ DEFAULT EXPORT (DOES NOT BREAK ANYTHING)
 * Existing code keeps working → 2MB
 */
export const Upload = createUpload();
/**
 * ✅ SAME SYSTEM, CUSTOM SIZE
 */
export const UploadCustom = (size, unit) => createUpload(size, unit);
//# sourceMappingURL=multter.middleware.js.map