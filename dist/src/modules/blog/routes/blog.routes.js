import { Router } from "express";
import { createBlog, getBlogs, getBlog, updateBlog, deleteBlog, } from "../controller/blog.controller.js";
const blogRoute = Router();
blogRoute.route("/")
    .post(createBlog)
    .get(getBlogs);
blogRoute.route("/:id")
    .get(getBlog)
    .patch(updateBlog)
    .delete(deleteBlog);
export default blogRoute;
//# sourceMappingURL=blog.routes.js.map