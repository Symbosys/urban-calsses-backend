import { Router } from "express";
import { createOfflineBatch, getAllOfflineBatches, getOfflineBatchById, updateOfflineBatch, deleteOfflineBatch } from "../controller/offlineBatch.controller.js";
import { protect, authorize } from "../../../middleware/auth.middleware.js";
const router = Router();
router.get("/", getAllOfflineBatches);
router.get("/:id", getOfflineBatchById);
// Admin-only routes
router.post("/", protect, authorize("ADMIN"), createOfflineBatch);
router.patch("/:id", protect, authorize("ADMIN"), updateOfflineBatch);
router.delete("/:id", protect, authorize("ADMIN"), deleteOfflineBatch);
export default router;
//# sourceMappingURL=offlineBatch.routes.js.map