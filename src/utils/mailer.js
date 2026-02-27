import nodemailer, {} from 'nodemailer';
import ENV from '../config/env.js';
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: ENV.USER_EMAIL,
        pass: ENV.EMAIL_APP_PASSWORD
    }
});
export async function sendEmail(to, subject, text) {
    const mailOptions = {
        from: ENV.USER_EMAIL,
        to,
        subject,
        text
    };
    await transporter.sendMail(mailOptions);
}
//# sourceMappingURL=mailer.js.map