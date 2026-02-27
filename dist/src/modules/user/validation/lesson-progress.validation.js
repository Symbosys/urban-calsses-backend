import { z } from "zod";
export const updateLessonProgressValidation = z.object({
    lessonId: z.string().min(1, "Lesson ID is required"),
    isCompleted: z.boolean(),
});
//# sourceMappingURL=lesson-progress.validation.js.map