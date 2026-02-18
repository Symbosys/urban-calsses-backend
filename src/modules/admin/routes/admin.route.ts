import { Router } from "express";
import { getDashboardStats } from "../controller/dashboard.controller.js";
import { 
  createBanner, 
  getAllBanners, 
  updateBanner, 
  deleteBanner 
} from "../controller/banner.controller.js";
import { 
  createCoupon, 
  getAllCoupons, 
  updateCoupon, 
  deleteCoupon 
} from "../controller/coupon.controller.js";
import { 
  getAllCoursesAdmin, 
  updateCourseStatus, 
  toggleCourseFeature 
} from "../controller/course.controller.js";
import { 
  getAllUsersAdmin, 
  toggleUserVerification, 
  toggleUserBlock 
} from "../controller/user.controller.js";

const router = Router();

// Dashboard
router.get("/dashboard/stats", getDashboardStats);

// User Management
router.get("/users", getAllUsersAdmin);
router.patch("/users/:id/verify", toggleUserVerification);
router.patch("/users/:id/block", toggleUserBlock);

// Banner Management
router.post("/banners", createBanner);
router.get("/banners", getAllBanners);
router.patch("/banners/:id", updateBanner);
router.delete("/banners/:id", deleteBanner);

// Coupon Management
router.post("/coupons", createCoupon);
router.get("/coupons", getAllCoupons);
router.patch("/coupons/:id", updateCoupon);
router.delete("/coupons/:id", deleteCoupon);

// Course Management
router.get("/courses", getAllCoursesAdmin);
router.patch("/courses/:id/status", updateCourseStatus);
router.patch("/courses/:id/feature", toggleCourseFeature);

export default router;
