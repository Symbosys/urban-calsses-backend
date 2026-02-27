import { Router } from "express";
import { createOrUpdateReview, getCourseReviews, getMyReview, updateReview, deleteReview, getAllReviews, toggleReviewVisibility } from "../controller/review.controller.js";
const router = Router();
// Public routes
router.get("/course/:courseId", getCourseReviews);
// Student routes (Should have protect middleware)
router.post("/", createOrUpdateReview);
router.get("/my/:courseId", getMyReview);
router.patch("/:id", updateReview);
router.delete("/:id", deleteReview);
// Admin routes (Should have protect/authorize middleware)
router.get("/", getAllReviews);
router.patch("/:id/visibility", toggleReviewVisibility);
export default router;
//# sourceMappingURL=review.route.js.map