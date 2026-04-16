
import dotenv from "dotenv";
const result = dotenv.config();
console.log("Dotenv result:", result);
console.log("DATABASE_URL:", process.env.DATABASE_URL);
