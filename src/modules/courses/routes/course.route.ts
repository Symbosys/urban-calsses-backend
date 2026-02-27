import { Router } from "express";
import {
  createCourse,
  getAllCourses,
  getCourseById,
  getCourseBySlug,
  updateCourse,
  deleteCourse,
} from "../controller/course.controller.js";
import { Upload } from "../../../middleware/multter.middleware.js";

const router = Router();

// Public routes
router.get("/", getAllCourses);
router.get("/slug/:slug", getCourseBySlug);
router.get("/:id", getCourseById);

// Admin/Instructor routes
router.post("/", Upload.single("thumbnail"), createCourse);
router.put("/:id", Upload.single("thumbnail"), updateCourse);
router.delete("/:id", deleteCourse);

export default router;
