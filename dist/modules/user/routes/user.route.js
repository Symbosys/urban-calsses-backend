import { Router } from "express";
import { getAllUsers, getUserById, updateUser, deleteUser } from "../controller/user.controller.js";
const router = Router();
// User management routes
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
export default router;
//# sourceMappingURL=user.route.js.map