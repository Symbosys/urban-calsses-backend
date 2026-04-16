import { z } from "zod";
export declare const offlineBatchValidation: z.ZodObject<{
    name: z.ZodString;
    capacity: z.ZodCoercedNumber<unknown>;
    startDate: z.ZodCoercedDate<unknown>;
    endDate: z.ZodCoercedDate<unknown>;
    startTime: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    endTime: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    daysOfWeek: z.ZodOptional<z.ZodArray<z.ZodString>>;
    isActive: z.ZodOptional<z.ZodCoercedBoolean<unknown>>;
    courseId: z.ZodString;
    centerId: z.ZodString;
}, z.core.$strip>;
export declare const updateOfflineBatchValidation: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodOptional<z.ZodCoercedBoolean<unknown>>>;
    capacity: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    startDate: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    endDate: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    startTime: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    endTime: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    daysOfWeek: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
}, z.core.$strip>;
//# sourceMappingURL=offlineBatch.validation.d.ts.map