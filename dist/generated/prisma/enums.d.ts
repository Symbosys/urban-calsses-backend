export declare const Role: {
    readonly STUDENT: "STUDENT";
    readonly INSTRUCTOR: "INSTRUCTOR";
    readonly ADMIN: "ADMIN";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const CourseLevel: {
    readonly BEGINNER: "BEGINNER";
    readonly INTERMEDIATE: "INTERMEDIATE";
    readonly ADVANCED: "ADVANCED";
    readonly ALL_LEVELS: "ALL_LEVELS";
};
export type CourseLevel = (typeof CourseLevel)[keyof typeof CourseLevel];
export declare const CourseStatus: {
    readonly DRAFT: "DRAFT";
    readonly UNDER_REVIEW: "UNDER_REVIEW";
    readonly PUBLISHED: "PUBLISHED";
    readonly ARCHIVED: "ARCHIVED";
};
export type CourseStatus = (typeof CourseStatus)[keyof typeof CourseStatus];
export declare const LessonType: {
    readonly VIDEO: "VIDEO";
    readonly PDF: "PDF";
    readonly QUIZ: "QUIZ";
    readonly TEXT: "TEXT";
    readonly LIVE: "LIVE";
};
export type LessonType = (typeof LessonType)[keyof typeof LessonType];
export declare const OrderStatus: {
    readonly PENDING: "PENDING";
    readonly COMPLETED: "COMPLETED";
    readonly FAILED: "FAILED";
    readonly REFUNDED: "REFUNDED";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
export declare const DiscountType: {
    readonly PERCENTAGE: "PERCENTAGE";
    readonly FIXED: "FIXED";
};
export type DiscountType = (typeof DiscountType)[keyof typeof DiscountType];
export declare const EnrollmentStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly EXPIRED: "EXPIRED";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
};
export type EnrollmentStatus = (typeof EnrollmentStatus)[keyof typeof EnrollmentStatus];
//# sourceMappingURL=enums.d.ts.map