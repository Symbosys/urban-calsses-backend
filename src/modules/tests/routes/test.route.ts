import { Router } from "express";
import {
  getAllTests,
  getTestById,
  createTest,
} from "../controller/test.controller.js";
import { protect } from "../../../middleware/auth.middleware.js";

const router = Router();

// Apply protection to all test routes if needed, 
// or allow public access for some
router.get("/", protect, getAllTests);
router.get("/:id", protect, getTestById);
router.post("/", protect, createTest);

export default router;
