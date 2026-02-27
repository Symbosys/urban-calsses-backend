import express from "express";
import cors from "cors";
import { errorMiddleware } from "./middleware/error.middleware.js";
import authRoute from "./modules/user/routes/auth.route.js";
import userRoute from "./modules/user/routes/user.route.js";
import courseRoute from "./modules/courses/routes/course.route.js";
import categoryRoute from "./modules/courses/routes/category.route.js";
import subCategoryRoute from "./modules/courses/routes/sub-category.route.js";
import instructorRoute from "./modules/instructor/routes/instructor.route.js";
import subjectRoute from "./modules/courses/routes/subject.route.js";
import sectionRoute from "./modules/courses/routes/section.route.js";
import lessonRoute from "./modules/courses/routes/lesson.route.js";
import lessonProgressRoute from "./modules/user/routes/lesson-progress.route.js";
import reviewRoute from "./modules/user/routes/review.route.js";
import wishlistRoute from "./modules/user/routes/wishlist.route.js";
import adminRoute from "./modules/admin/routes/admin.route.js";
import lessonResourceRoute from "./modules/courses/routes/lesson-resource.route.js";
import resultRoute from "./modules/results/routes/result.routes.js";
import offlineCenterRoute from "./modules/offlineCenter/routes/offlineCenter.routes.js";
import blogRoute from "./modules/blog/routes/blog.routes.js";
import userGoalRoute from "./modules/user/routes/userGoal.route.js";


const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/user/goals", userGoalRoute);
app.use("/api/v1/user", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/courses", courseRoute);
app.use("/api/v1/categories", categoryRoute);
app.use("/api/v1/sub-categories", subCategoryRoute);
app.use("/api/v1/instructors", instructorRoute);
app.use("/api/v1/subjects", subjectRoute);
app.use("/api/v1/sections", sectionRoute);
app.use("/api/v1/lessons", lessonRoute);
app.use("/api/v1/user/progress", lessonProgressRoute);
app.use("/api/v1/reviews", reviewRoute);
app.use("/api/v1/wishlist", wishlistRoute);
app.use("/api/v1/admin", adminRoute);
app.use("/api/v1/lessons/resources", lessonResourceRoute);
app.use("/api/v1/results", resultRoute);
app.use("/api/v1/offline-centers", offlineCenterRoute);
app.use("/api/v1/blogs", blogRoute);



app.get("/", (req, res) => {
  res.send("Urban Classes API is running...");
});

// Error Middleware
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
