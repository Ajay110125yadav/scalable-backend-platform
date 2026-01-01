import dotenv from "dotenv";

dotenv.config();

console.log("🔥 ENV FILE LOADED");
console.log("🔥 REDIS_URL =", process.env.REDIS_URL);