import { Router } from "express";
import {
  toggleWishlist,
  getMyWishlist,
  checkWishlistStatus,
  clearWishlist
} from "../controller/wishlist.controller.js";

const router = Router();

// Student routes (Should have protect middleware)
router.post("/toggle", toggleWishlist);
router.get("/", getMyWishlist);
router.get("/check/:courseId", checkWishlistStatus);
router.delete("/clear", clearWishlist);

export default router;
