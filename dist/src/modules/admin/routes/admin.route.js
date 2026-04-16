import { Router } from "express";
import { getAllBanners, createBanner, updateBanner, deleteBanner, } from "../controller/banner.controller.js";
import { Upload } from "../../../middleware/multter.middleware.js";
const router = Router();
router.get("/banners", getAllBanners);
router.post("/banners", Upload.single("image"), createBanner);
router.patch("/banners/:id", Upload.single("image"), updateBanner);
router.delete("/banners/:id", deleteBanner);
export default router;
//# sourceMappingURL=admin.route.js.map