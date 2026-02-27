import { Router } from "express";
import { createAuthController, verifyOtpController } from "../controller/auth.controller.js";
const router = Router();
router.post("/auth/send-otp", createAuthController);
router.post("/auth/verify-otp", verifyOtpController);
export default router;
//# sourceMappingURL=auth.route.js.map