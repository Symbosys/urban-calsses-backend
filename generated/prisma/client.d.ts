import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Account
 *
 */
export type Account = Prisma.AccountModel;
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model Instructor
 *
 */
export type Instructor = Prisma.InstructorModel;
/**
 * Model Admin
 *
 */
export type Admin = Prisma.AdminModel;
/**
 * Model Otp
 *
 */
export type Otp = Prisma.OtpModel;
/**
 * Model Category
 *
 */
export type Category = Prisma.CategoryModel;
/**
 * Model SubCategory
 *
 */
export type SubCategory = Prisma.SubCategoryModel;
/**
 * Model UserGoal
 *
 */
export type UserGoal = Prisma.UserGoalModel;
/**
 * Model Course
 *
 */
export type Course = Prisma.CourseModel;
/**
 * Model CourseInstructor
 *
 */
export type CourseInstructor = Prisma.CourseInstructorModel;
/**
 * Model Subject
 *
 */
export type Subject = Prisma.SubjectModel;
/**
 * Model Section
 *
 */
export type Section = Prisma.SectionModel;
/**
 * Model Lesson
 *
 */
export type Lesson = Prisma.LessonModel;
/**
 * Model LessonResource
 *
 */
export type LessonResource = Prisma.LessonResourceModel;
/**
 * Model CourseTag
 *
 */
export type CourseTag = Prisma.CourseTagModel;
/**
 * Model Order
 *
 */
export type Order = Prisma.OrderModel;
/**
 * Model Enrollment
 *
 */
export type Enrollment = Prisma.EnrollmentModel;
/**
 * Model LessonProgress
 *
 */
export type LessonProgress = Prisma.LessonProgressModel;
/**
 * Model Review
 *
 */
export type Review = Prisma.ReviewModel;
/**
 * Model Wishlist
 *
 */
export type Wishlist = Prisma.WishlistModel;
/**
 * Model Banner
 *
 */
export type Banner = Prisma.BannerModel;
/**
 * Model Coupon
 *
 */
export type Coupon = Prisma.CouponModel;
//# sourceMappingURL=client.d.ts.map