import { z } from "zod";
export declare const createCourseValidation: z.ZodObject<{
    title: z.ZodString;
    shortDescription: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    thumbnail: z.ZodOptional<z.ZodAny>;
    previewVideo: z.ZodOptional<z.ZodAny>;
    price: z.ZodCoercedNumber<unknown>;
    discountPrice: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    language: z.ZodDefault<z.ZodString>;
    level: z.ZodDefault<z.ZodEnum<{
        BEGINNER: "BEGINNER";
        INTERMEDIATE: "INTERMEDIATE";
        ADVANCED: "ADVANCED";
        ALL_LEVELS: "ALL_LEVELS";
    }>>;
    status: z.ZodDefault<z.ZodEnum<{
        DRAFT: "DRAFT";
        UNDER_REVIEW: "UNDER_REVIEW";
        PUBLISHED: "PUBLISHED";
        ARCHIVED: "ARCHIVED";
    }>>;
    isFeatured: z.ZodDefault<z.ZodCoercedBoolean<unknown>>;
    durationMonths: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    subCategoryId: z.ZodString;
    instructorIds: z.ZodPipe<z.ZodTransform<any, unknown>, z.ZodOptional<z.ZodArray<z.ZodString>>>;
    tags: z.ZodPipe<z.ZodTransform<any, unknown>, z.ZodOptional<z.ZodArray<z.ZodString>>>;
    metaTitle: z.ZodOptional<z.ZodString>;
    metaDescription: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateCourseValidation: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    shortDescription: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    thumbnail: z.ZodOptional<z.ZodOptional<z.ZodAny>>;
    previewVideo: z.ZodOptional<z.ZodOptional<z.ZodAny>>;
    price: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    discountPrice: z.ZodOptional<z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
    language: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    level: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
        BEGINNER: "BEGINNER";
        INTERMEDIATE: "INTERMEDIATE";
        ADVANCED: "ADVANCED";
        ALL_LEVELS: "ALL_LEVELS";
    }>>>;
    status: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
        DRAFT: "DRAFT";
        UNDER_REVIEW: "UNDER_REVIEW";
        PUBLISHED: "PUBLISHED";
        ARCHIVED: "ARCHIVED";
    }>>>;
    isFeatured: z.ZodOptional<z.ZodDefault<z.ZodCoercedBoolean<unknown>>>;
    durationMonths: z.ZodOptional<z.ZodDefault<z.ZodCoercedNumber<unknown>>>;
    subCategoryId: z.ZodOptional<z.ZodString>;
    instructorIds: z.ZodOptional<z.ZodPipe<z.ZodTransform<any, unknown>, z.ZodOptional<z.ZodArray<z.ZodString>>>>;
    tags: z.ZodOptional<z.ZodPipe<z.ZodTransform<any, unknown>, z.ZodOptional<z.ZodArray<z.ZodString>>>>;
    metaTitle: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    metaDescription: z.ZodOptional<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
//# sourceMappingURL=course.validation.d.ts.map