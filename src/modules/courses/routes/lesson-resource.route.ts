import { Router } from "express";
import {
  addResource,
  getLessonResources,
  updateResource,
  deleteResource
} from "../controller/lesson-resource.controller.js";

const router = Router();

// Manage resources
router.post("/", addResource);
router.patch("/:id", updateResource);
router.delete("/:id", deleteResource);

// Fetch resources for a lesson
router.get("/:lessonId", getLessonResources);

export default router;
