import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { createAuthValidation, verifyOtpValidation } from "../validation/auth.validation.js";
import { generateOtp } from "../../../utils/otp.js";
import { SuccessResponse, ErrorResponse } from "../../../utils/response.util.js";
import { generateToken } from "../../../utils/jwt.util.js";
export const createAuthController = asyncHandler(async (req, res, next) => {
    const validation = createAuthValidation.parse(req.body);
    // if user exists then simply generate otp else create user and generate otp
    const user = await prisma.user.findUnique({
        where: {
            email: validation.email,
        },
    });
    const otp = generateOtp();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
    if (user) {
        await prisma.otp.create({
            data: {
                email: validation.email,
                otp,
                expiresAt,
            },
        });
    }
    else {
        await prisma.user.create({
            data: {
                email: validation.email,
                account: {
                    create: {
                        role: "STUDENT",
                    },
                },
            },
        });
        await prisma.otp.create({
            data: {
                email: validation.email,
                otp,
                expiresAt,
            },
        });
    }
    return SuccessResponse(res, "OTP sent successfully", { otp });
});
export const verifyOtpController = asyncHandler(async (req, res, next) => {
    const validation = verifyOtpValidation.parse(req.body);
    const otpRecord = await prisma.otp.findFirst({
        where: {
            email: validation.email,
            otp: validation.otp,
            expiresAt: { gt: new Date() },
            verified: false,
        },
        orderBy: { createdAt: "desc" },
    });
    if (!otpRecord) {
        return next(new ErrorResponse("Invalid or expired OTP", 400));
    }
    // Mark OTP as verified
    await prisma.otp.update({
        where: { id: otpRecord.id },
        data: { verified: true },
    });
    const user = await prisma.user.findUnique({
        where: { email: validation.email },
        include: {
            account: true,
        },
    });
    if (!user) {
        return next(new ErrorResponse("User not found", 404));
    }
    const token = generateToken({
        id: user.id,
        accountId: user.accountId,
        role: user.account.role,
    });
    return SuccessResponse(res, "Login successful", { user, token }, 200);
});
//# sourceMappingURL=auth.controller.js.map