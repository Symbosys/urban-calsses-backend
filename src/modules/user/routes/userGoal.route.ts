import { Router } from "express";
import { setUserGoals, getUserGoals } from "../controller/userGoal.controller.js";

const router = Router();

router.post("/", setUserGoals);
router.get("/:userId", getUserGoals);

export default router;
