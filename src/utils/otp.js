import crypto from "crypto";
export const generateOtp = () => {
    const otp = crypto.randomInt(1000, 10000).toString();
    return otp;
};
//# sourceMappingURL=otp.js.map