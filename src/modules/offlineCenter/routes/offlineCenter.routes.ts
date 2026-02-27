import { Router } from "express";
import {
  createOfflineCenter,
  getAllOfflineCenters,
  getOfflineCenterById,
  updateOfflineCenter,
  deleteOfflineCenter,
} from "../controller/offlineCenter.controller.js";
import { Upload } from "../../../middleware/multter.middleware.js";

const router = Router();

router.post("/", Upload.single("image"), createOfflineCenter);
router.get("/", getAllOfflineCenters);
router.get("/:id", getOfflineCenterById);
router.patch("/:id", Upload.single("image"), updateOfflineCenter);
router.delete("/:id", deleteOfflineCenter);

export default router;
