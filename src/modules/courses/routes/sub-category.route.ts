import { Router } from "express";
import {
  createSubCategory,
  getAllSubCategories,
  getSubCategoryById,
  updateSubCategory,
  deleteSubCategory,
} from "../controller/category.controller.js";

import { Upload } from "../../../middleware/multter.middleware.js";

const router = Router();

router.post("/", Upload.single("icon"), createSubCategory);
router.get("/", getAllSubCategories);
router.get("/:id", getSubCategoryById);
router.put("/:id", Upload.single("icon"), updateSubCategory);
router.delete("/:id", deleteSubCategory);

export default router;
