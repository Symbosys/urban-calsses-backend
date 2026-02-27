import { Router } from "express";
import {
  createSubject,
  getAllSubjects,
  getSubjectById,
  updateSubject,
  deleteSubject,
} from "../controller/subject.controller.js";

import { Upload } from "../../../middleware/multter.middleware.js";

const router = Router();

router.post("/", Upload.single("icon"), createSubject);
router.get("/", getAllSubjects);
router.get("/:id", getSubjectById);
router.put("/:id", Upload.single("icon"), updateSubject);
router.delete("/:id", deleteSubject);

export default router;
