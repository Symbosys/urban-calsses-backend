export class ErrorResponse extends Error {
    message;
    statusCode;
    constructor(message, statusCode) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
export const SuccessResponse = (res, message, data = {}, statusCode = 200) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data: normalizeBigInt(data),
    });
};
export function normalizeBigInt(obj) {
    if (obj instanceof Date) {
        return obj.toISOString(); // ✅ serialize Date properly
    }
    else if (typeof obj === "bigint") {
        return obj.toString(); // ✅ BigInt -> string
    }
    else if (Array.isArray(obj)) {
        return obj.map(normalizeBigInt);
    }
    else if (obj && typeof obj === "object") {
        return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, normalizeBigInt(v)]));
    }
    return obj;
}
//# sourceMappingURL=response.util.js.map