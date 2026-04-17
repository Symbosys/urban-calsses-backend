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
import adminRoute from "./modules/admin/routes/adminModule.route.js";
import lessonResourceRoute from "./modules/courses/routes/lesson-resource.route.js";
import resultRoute from "./modules/results/routes/result.routes.js";
import blogRoute from "./modules/blog/routes/blog.routes.js";
import userGoalRoute from "./modules/user/routes/userGoal.route.js";
import purchaseRoute from "./modules/courses/routes/purchase.route.js";
import offlineCenterRoute from "./modules/offlineCenter/routes/offlineCenter.routes.js";
import offlineBatchRoute from "./modules/offlineCenter/routes/offlineBatch.routes.js";
import offlineBookingRoute from "./modules/offlineCenter/routes/offlineBooking.routes.js";


const app = express();
const PORT = Number(process.env.PORT) || 4000;

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});



// app.use(cors({
//   origin: (origin, callback) => {
//     const allowed = [
//       "http://localhost:5173",
//       "http://localhost:3000",
//       "http://127.0.0.1:5173",
//       "http://127.0.0.1:3000",
//       "https://urbanclasses.in",
//       "https://www.urbanclasses.in",
//       "https://urban-calsses-website.vercel.app",
//       "https://urban-calsses-admin.vercel.app",
//       "https://unbarclasses.in"
//     ];

app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:3000",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:3000",
    "https://urbanclasses.in",
    "https://www.urbanclasses.in",
    "https://urban-calsses-website.vercel.app",
    "https://urban-calsses-admin.vercel.app"
  ],
  credentials: true
}));
//     if (!origin || allowed.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(null, false);
//     }
//   },
//   credentials: true,
//   optionsSuccessStatus: 200
// }));

app.options(/(.*)/, cors()); // Explicitly handle preflight for all routes using regex to avoid path-to-regexp error

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
app.use("/api/v1/offline-batches", offlineBatchRoute);
app.use("/api/v1/offline-bookings", offlineBookingRoute);
app.use("/api/v1/blogs", blogRoute);
app.use("/api/v1/purchase", purchaseRoute);



app.get("/", (req, res) => {
  res.send("Urban Classes API is running...");
});

// Error Middleware
app.use(errorMiddleware);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server started on port ${PORT}`);
});
