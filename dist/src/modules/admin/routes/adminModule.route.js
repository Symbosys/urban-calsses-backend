import { Router } from "express";
import { getAllBanners, createBanner, updateBanner, deleteBanner, } from "../controller/banner.controller.js";
import * as coupons from "../controller/coupon.controller.js";
import { loginAdmin, addAdmin } from "../controller/auth.controller.js";
import { Upload } from "../../../middleware/multter.middleware.js";
import { protect, authorize } from "../../../middleware/auth.middleware.js";
const router = Router();
// Auth Routes
router.post("/auth/login", loginAdmin);
router.post("/auth/add-admin", addAdmin);
// Banner Routes
router.get("/banners", getAllBanners);
router.post("/banners", Upload.single("image"), createBanner);
router.patch("/banners/:id", Upload.single("image"), updateBanner);
router.delete("/banners/:id", deleteBanner);
// Coupon Routes
router.use(protect, authorize("ADMIN"));
router.get("/coupons", coupons.getAllCoupons);
router.get("/coupons/:id", coupons.getCouponById);
router.post("/coupons", coupons.createCoupon);
router.patch("/coupons/:id", coupons.updateCoupon);
router.delete("/coupons/:id", coupons.deleteCoupon);
export default router;
//# sourceMappingURL=adminModule.route.js.map