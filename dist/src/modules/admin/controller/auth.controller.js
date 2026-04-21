import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import { prisma } from "../../../config/prisma.js";
import { asyncHandler } from "../../../middleware/error.middleware.js";
import { ErrorResponse, SuccessResponse } from "../../../utils/response.util.js";
import { generateToken } from "../../../utils/jwt.util.js";
import { adminLoginValidation, addAdminValidation } from "../validation/auth.validation.js";
export const loginAdmin = asyncHandler(async (req, res, next) => {
    const { email, password } = adminLoginValidation.parse(req.body);
    const admin = await prisma.admin.findUnique({
        where: { email },
        include: { account: true },
    });
    if (!admin) {
        return next(new ErrorResponse("Invalid credentials", 401));
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
        return next(new ErrorResponse("Invalid credentials", 401));
    }
    const token = generateToken({
        id: admin.id,
        accountId: admin.accountId,
        role: admin.account.role,
    });
    SuccessResponse(res, "Admin logged in successfully", {
        user: admin,
        token,
    });
});
export const addAdmin = asyncHandler(async (req, res, next) => {
    const { name, email, password } = addAdminValidation.parse(req.body);
    const existingAdmin = await prisma.admin.findUnique({ where: { email } });
    if (existingAdmin) {
        return next(new ErrorResponse("Admin already exists with this email", 400));
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await prisma.$transaction(async (tx) => {
        const account = await tx.account.create({
            data: {
                role: "ADMIN",
            },
        });
        return await tx.admin.create({
            data: {
                name,
                email,
                password: hashedPassword,
                accountId: account.id,
            },
            include: { account: true },
        });
    });
    SuccessResponse(res, "Admin added successfully", admin, 201);
});
export const sendOtp = asyncHandler(async (req, res, next) => {
    const { email } = req.body;
    if (!email) {
        return next(new ErrorResponse("Please provide an email", 400));
    }
    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your OTP Verification Code",
        text: `Your OTP is ${otp}. It is valid for a short time. Please do not share it with anyone.`,
    };
    try {
        await transporter.sendMail(mailOptions);
        SuccessResponse(res, "OTP sent successfully to your email", { email });
    }
    catch (error) {
        console.error("Email sending error:", error);
        return next(new ErrorResponse("Failed to send OTP", 500));
    }
});
//# sourceMappingURL=auth.controller.js.map