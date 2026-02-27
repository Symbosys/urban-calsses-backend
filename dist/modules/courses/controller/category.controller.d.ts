export declare const createCategory: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get all categories with subcategory counts
 * @route   GET /api/v1/categories
 */
export declare const getAllCategories: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get category by ID with subcategories
 * @route   GET /api/v1/categories/:id
 */
export declare const getCategoryById: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
export declare const updateCategory: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Delete category
 * @route   DELETE /api/v1/categories/:id
 */
export declare const deleteCategory: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
export declare const createSubCategory: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get all sub-categories
 * @route   GET /api/v1/sub-categories
 */
export declare const getAllSubCategories: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Get sub-category by ID
 * @route   GET /api/v1/sub-categories/:id
 */
export declare const getSubCategoryById: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
export declare const updateSubCategory: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
/**
 * @desc    Delete sub-category
 * @route   DELETE /api/v1/sub-categories/:id
 */
export declare const deleteSubCategory: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
//# sourceMappingURL=category.controller.d.ts.map