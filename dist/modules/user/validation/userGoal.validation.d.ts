import { z } from "zod";
export declare const setUserGoalsValidation: z.ZodObject<{
    userId: z.ZodString;
    subCategoryIds: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export declare const getUserGoalsValidation: z.ZodObject<{
    userId: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=userGoal.validation.d.ts.map