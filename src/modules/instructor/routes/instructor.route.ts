import { Router } from "express";
import {
  createInstructor,
  getAllInstructors,
  getInstructorById,
  updateInstructor,
  deleteInstructor,
} from "../controller/instructor.controller.js";
import { Upload } from "../../../middleware/multter.middleware.js";

const router = Router();

router.get("/", getAllInstructors);
router.get("/:id", getInstructorById);
router.post("/", Upload.single("avatar"), createInstructor);
router.put("/:id", Upload.single("avatar"), updateInstructor);
router.delete("/:id", deleteInstructor);

export default router;
