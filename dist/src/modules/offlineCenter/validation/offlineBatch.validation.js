import { z } from "zod";
export const offlineBatchValidation = z.object({
    name: z.string().min(1, "Batch name is required"),
    capacity: z.coerce.number().int().min(1, "Capacity must be at least 1"),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    startTime: z.string().optional().nullable(),
    endTime: z.string().optional().nullable(),
    daysOfWeek: z.array(z.string()).optional(),
    isActive: z.coerce.boolean().optional(),
    courseId: z.string().min(1, "Course ID is required"),
    centerId: z.string().min(1, "Center ID is required"),
});
export const updateOfflineBatchValidation = offlineBatchValidation.partial().omit({
    courseId: true,
    centerId: true
});
//# sourceMappingURL=offlineBatch.validation.js.map