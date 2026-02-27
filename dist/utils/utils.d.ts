import type { ZodError } from "zod";
export declare const zodError: (error: ZodError) => any;
export declare const parseCookies: (cookieHeader: string | undefined) => {
    [key: string]: string;
};
type DecimalObj = {
    s: number;
    e: number;
    d: number[];
};
export declare function parseToDecimal(price: number | DecimalObj | null | undefined): number;
export declare const getDateRange: (date?: Date) => {
    start: Date;
    end: Date;
} | undefined;
export declare function generateOrderNumber(): string;
export declare function extractPartnerId(memberName: string): number;
export declare function removeUndefined<T extends object>(obj: T): {
    [K in keyof T as T[K] extends undefined ? never : K]: T[K];
};
export declare function slugify(text: string): string;
export {};
//# sourceMappingURL=utils.d.ts.map