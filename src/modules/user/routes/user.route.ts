import { Router } from "express";
import { 
  getAllUsers, 
  getUserById, 
  updateUser, 
  deleteUser 
} from "../controller/user.controller.js";
import { getStudentDashboardMetrics } from "../controller/dashboard.controller.js";
import { protect } from "../../../middleware/auth.middleware.js";

const router = Router();

// Dashboard Route (Protected)
router.get("/dashboard", protect, getStudentDashboardMetrics);

// User management routes
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
