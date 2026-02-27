import { Router } from "express";
import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../controller/category.controller.js";

import { Upload } from "../../../middleware/multter.middleware.js";

const router = Router();

router.post("/", Upload.single("icon"), createCategory);
router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.put("/:id", Upload.single("icon"), updateCategory);
router.delete("/:id", deleteCategory);

export default router;
