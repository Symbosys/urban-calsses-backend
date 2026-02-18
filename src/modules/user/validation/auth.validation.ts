import { z } from "zod";

export const createAuthValidation = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
});

export const verifyOtpValidation = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  otp: z.string().length(4, "OTP must be 4 digits"),
});

