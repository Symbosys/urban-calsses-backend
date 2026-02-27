import { Router } from "express";
import { updateLessonProgress, getLessonProgress, getCourseProgress, } from "../controller/lesson-progress.controller.js";
const router = Router();
router.post("/", updateLessonProgress);
router.get("/:lessonId", getLessonProgress);
router.get("/course/:courseId", getCourseProgress);
export default router;
//# sourceMappingURL=lesson-progress.route.js.map