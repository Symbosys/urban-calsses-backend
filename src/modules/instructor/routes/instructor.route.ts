import { Router } from "express";
import {
  createInstructor,
  getAllInstructors,
  getInstructorById,
  updateInstructor,
  deleteInstructor,
} from "../controller/instructor.controller.js";

const router = Router();

router.get("/", getAllInstructors);
router.get("/:id", getInstructorById);
router.post("/", createInstructor);
router.put("/:id", updateInstructor);
router.delete("/:id", deleteInstructor);

export default router;
