import { z } from "zod";
export declare const categoryValidation: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodAny>;
    order: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    isActive: z.ZodDefault<z.ZodCoercedBoolean<unknown>>;
}, z.core.$strip>;
export declare const updateCategoryValidation: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    icon: z.ZodOptional<z.ZodOptional<z.ZodAny>>;
    order: z.ZodOptional<z.ZodDefault<z.ZodCoercedNumber<unknown>>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodCoercedBoolean<unknown>>>;
}, z.core.$strip>;
export declare const subCategoryValidation: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodAny>;
    order: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    isActive: z.ZodDefault<z.ZodCoercedBoolean<unknown>>;
    categoryId: z.ZodString;
}, z.core.$strip>;
export declare const updateSubCategoryValidation: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    icon: z.ZodOptional<z.ZodOptional<z.ZodAny>>;
    order: z.ZodOptional<z.ZodDefault<z.ZodCoercedNumber<unknown>>>;
    isActive: z.ZodOptional<z.ZodDefault<z.ZodCoercedBoolean<unknown>>>;
    categoryId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=category.validation.d.ts.map