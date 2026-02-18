import { Router } from "express";
import {
  createCourse,
  getAllCourses,
  getCourseById,
  getCourseBySlug,
  updateCourse,
  deleteCourse,
} from "../controller/course.controller.js";

const router = Router();

// Public routes
router.get("/", getAllCourses);
router.get("/slug/:slug", getCourseBySlug);
router.get("/:id", getCourseById);

// Admin/Instructor routes (Authentication middleware should be added here later)
router.post("/", createCourse);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);

export default router;
