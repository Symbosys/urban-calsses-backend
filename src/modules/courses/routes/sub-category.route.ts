import { Router } from "express";
import {
  createSubCategory,
  getAllSubCategories,
  getSubCategoryById,
  updateSubCategory,
  deleteSubCategory,
} from "../controller/category.controller.js";

const router = Router();

router.post("/", createSubCategory);
router.get("/", getAllSubCategories);
router.get("/:id", getSubCategoryById);
router.put("/:id", updateSubCategory);
router.delete("/:id", deleteSubCategory);

export default router;
