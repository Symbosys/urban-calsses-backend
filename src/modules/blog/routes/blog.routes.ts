import { Router } from "express";
import {
  createBlog,
  getBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
} from "../controller/blog.controller.js";

import { Upload } from "../../../middleware/multter.middleware.js";

const blogRoute = Router();

blogRoute.route("/")
  .post(Upload.fields([{ name: "thumbnail" }, { name: "authorImage" }]), createBlog)
  .get(getBlogs);

blogRoute.route("/:id")
  .get(getBlog)
  .patch(Upload.fields([{ name: "thumbnail" }, { name: "authorImage" }]), updateBlog)
  .delete(deleteBlog);

export default blogRoute;
