console.log("🔥 REDIS CONFIG FILE LOADED");
console.log("🔥 REDIS_URL =", process.env.REDIS_URL);

if (!process.env.REDIS_URL) {
  throw new Error("❌ REDIS_URL is undefined – dotenv not loaded first");
}

export default {
  url: process.env.REDIS_URL,
  tls: {},
};