import { Router } from "express";
import { createOfflineBooking, getAllOfflineBookings, updateOfflineBookingStatus } from "../controller/offlineBooking.controller.js";
import { protect, authorize } from "../../../middleware/auth.middleware.js";
const router = Router();
// Public route for booking
router.post("/", createOfflineBooking);
// Protected routes
router.get("/", protect, getAllOfflineBookings);
// Admin-only status update
router.patch("/:id/status", protect, authorize("ADMIN"), updateOfflineBookingStatus);
export default router;
//# sourceMappingURL=offlineBooking.routes.js.map