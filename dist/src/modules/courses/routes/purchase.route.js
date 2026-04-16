import { Router } from "express";
import { checkout, verifyPayment, checkEnrollment } from "../controller/purchase.controller.js";
import { protect, authorize } from "../../../middleware/auth.middleware.js";
const router = Router();
// Protect all purchase routes to only allow authenticated students
router.use(protect);
router.use(authorize("STUDENT"));
// Check enrollment status
router.get("/check/:courseId", checkEnrollment);
// Purchase initiation & checkout
router.post("/checkout", checkout);
// Payment verification & completion
router.post("/verify", verifyPayment);
export default router;
//# sourceMappingURL=purchase.route.js.map