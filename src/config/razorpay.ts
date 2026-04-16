import Razorpay from "razorpay";
import ENV from "./env.js";

if (!ENV.RAZORPAY_KEY_ID || !ENV.RAZORPAY_KEY_SECRET) {
  throw new Error("Missing required Razorpay environment variables: RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET");
}

const razorpay = new Razorpay({
  key_id: ENV.RAZORPAY_KEY_ID,
  key_secret: ENV.RAZORPAY_KEY_SECRET,
});

export default razorpay;
