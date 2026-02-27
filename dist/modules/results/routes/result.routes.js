import { Router } from "express";
import { createResult, getAllResults, getResultById, updateResult, deleteResult, } from "../controller/result.controller.js";
import { Upload } from "../../../middleware/multter.middleware.js";
const router = Router();
router.post("/", Upload.single("image"), createResult);
router.get("/", getAllResults);
router.get("/:id", getResultById);
router.patch("/:id", Upload.single("image"), updateResult);
router.delete("/:id", deleteResult);
export default router;
//# sourceMappingURL=result.routes.js.map