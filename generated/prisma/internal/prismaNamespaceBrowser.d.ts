import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Account: "Account";
    readonly User: "User";
    readonly Instructor: "Instructor";
    readonly Admin: "Admin";
    readonly Otp: "Otp";
    readonly Category: "Category";
    readonly SubCategory: "SubCategory";
    readonly UserGoal: "UserGoal";
    readonly Course: "Course";
    readonly CourseInstructor: "CourseInstructor";
    readonly Subject: "Subject";
    readonly Section: "Section";
    readonly Lesson: "Lesson";
    readonly LessonResource: "LessonResource";
    readonly CourseTag: "CourseTag";
    readonly Order: "Order";
    readonly Enrollment: "Enrollment";
    readonly LessonProgress: "LessonProgress";
    readonly Review: "Review";
    readonly Wishlist: "Wishlist";
    readonly Banner: "Banner";
    readonly Coupon: "Coupon";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AccountScalarFieldEnum: {
    readonly id: "id";
    readonly role: "role";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly phone: "phone";
    readonly avatar: "avatar";
    readonly isVerified: "isVerified";
    readonly isBlocked: "isBlocked";
    readonly accountId: "accountId";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const InstructorScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly phone: "phone";
    readonly avatar: "avatar";
    readonly isVerified: "isVerified";
    readonly isBlocked: "isBlocked";
    readonly accountId: "accountId";
    readonly bio: "bio";
    readonly specialization: "specialization";
    readonly experience: "experience";
    readonly rating: "rating";
};
export type InstructorScalarFieldEnum = (typeof InstructorScalarFieldEnum)[keyof typeof InstructorScalarFieldEnum];
export declare const AdminScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly password: "password";
    readonly accountId: "accountId";
};
export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum];
export declare const OtpScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly otp: "otp";
    readonly expiresAt: "expiresAt";
    readonly verified: "verified";
    readonly createdAt: "createdAt";
};
export type OtpScalarFieldEnum = (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum];
export declare const CategoryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly icon: "icon";
    readonly order: "order";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];
export declare const SubCategoryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly icon: "icon";
    readonly order: "order";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly categoryId: "categoryId";
};
export type SubCategoryScalarFieldEnum = (typeof SubCategoryScalarFieldEnum)[keyof typeof SubCategoryScalarFieldEnum];
export declare const UserGoalScalarFieldEnum: {
    readonly id: "id";
    readonly createdAt: "createdAt";
    readonly userId: "userId";
    readonly subCategoryId: "subCategoryId";
};
export type UserGoalScalarFieldEnum = (typeof UserGoalScalarFieldEnum)[keyof typeof UserGoalScalarFieldEnum];
export declare const CourseScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly slug: "slug";
    readonly shortDescription: "shortDescription";
    readonly description: "description";
    readonly thumbnail: "thumbnail";
    readonly previewVideo: "previewVideo";
    readonly price: "price";
    readonly discountPrice: "discountPrice";
    readonly language: "language";
    readonly level: "level";
    readonly status: "status";
    readonly isFeatured: "isFeatured";
    readonly durationMonths: "durationMonths";
    readonly totalLessons: "totalLessons";
    readonly metaTitle: "metaTitle";
    readonly metaDescription: "metaDescription";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly subCategoryId: "subCategoryId";
};
export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum];
export declare const CourseInstructorScalarFieldEnum: {
    readonly id: "id";
    readonly role: "role";
    readonly order: "order";
    readonly createdAt: "createdAt";
    readonly courseId: "courseId";
    readonly instructorId: "instructorId";
};
export type CourseInstructorScalarFieldEnum = (typeof CourseInstructorScalarFieldEnum)[keyof typeof CourseInstructorScalarFieldEnum];
export declare const SubjectScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly icon: "icon";
    readonly order: "order";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly courseId: "courseId";
};
export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum];
export declare const SectionScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly order: "order";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly subjectId: "subjectId";
};
export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum];
export declare const LessonScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly type: "type";
    readonly content: "content";
    readonly video: "video";
    readonly attachments: "attachments";
    readonly duration: "duration";
    readonly order: "order";
    readonly isFree: "isFree";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly sectionId: "sectionId";
};
export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum];
export declare const LessonResourceScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly file: "file";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly lessonId: "lessonId";
};
export type LessonResourceScalarFieldEnum = (typeof LessonResourceScalarFieldEnum)[keyof typeof LessonResourceScalarFieldEnum];
export declare const CourseTagScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly courseId: "courseId";
};
export type CourseTagScalarFieldEnum = (typeof CourseTagScalarFieldEnum)[keyof typeof CourseTagScalarFieldEnum];
export declare const OrderScalarFieldEnum: {
    readonly id: "id";
    readonly orderNumber: "orderNumber";
    readonly amount: "amount";
    readonly discount: "discount";
    readonly tax: "tax";
    readonly totalAmount: "totalAmount";
    readonly status: "status";
    readonly paymentId: "paymentId";
    readonly paymentMethod: "paymentMethod";
    readonly couponCode: "couponCode";
    readonly receipt: "receipt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly userId: "userId";
    readonly courseId: "courseId";
};
export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];
export declare const EnrollmentScalarFieldEnum: {
    readonly id: "id";
    readonly status: "status";
    readonly progress: "progress";
    readonly enrolledAt: "enrolledAt";
    readonly expiresAt: "expiresAt";
    readonly completedAt: "completedAt";
    readonly userId: "userId";
    readonly courseId: "courseId";
};
export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum];
export declare const LessonProgressScalarFieldEnum: {
    readonly id: "id";
    readonly isCompleted: "isCompleted";
    readonly completedAt: "completedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly userId: "userId";
    readonly lessonId: "lessonId";
};
export type LessonProgressScalarFieldEnum = (typeof LessonProgressScalarFieldEnum)[keyof typeof LessonProgressScalarFieldEnum];
export declare const ReviewScalarFieldEnum: {
    readonly id: "id";
    readonly rating: "rating";
    readonly comment: "comment";
    readonly isVisible: "isVisible";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly userId: "userId";
    readonly courseId: "courseId";
};
export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum];
export declare const WishlistScalarFieldEnum: {
    readonly id: "id";
    readonly createdAt: "createdAt";
    readonly userId: "userId";
    readonly courseId: "courseId";
};
export type WishlistScalarFieldEnum = (typeof WishlistScalarFieldEnum)[keyof typeof WishlistScalarFieldEnum];
export declare const BannerScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly image: "image";
    readonly link: "link";
    readonly isActive: "isActive";
    readonly order: "order";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BannerScalarFieldEnum = (typeof BannerScalarFieldEnum)[keyof typeof BannerScalarFieldEnum];
export declare const CouponScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly description: "description";
    readonly discountType: "discountType";
    readonly discountValue: "discountValue";
    readonly minOrderAmount: "minOrderAmount";
    readonly maxUses: "maxUses";
    readonly usedCount: "usedCount";
    readonly validFrom: "validFrom";
    readonly validTill: "validTill";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CouponScalarFieldEnum = (typeof CouponScalarFieldEnum)[keyof typeof CouponScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map