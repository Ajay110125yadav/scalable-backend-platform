import "dotenv/config";
import redis from "./config/redis.js";

async function test() {
  try {
    await redis.set("ping", "pong");
    const value = await redis.get("ping");
    console.log("✅ Redis working:", value);
    process.exit(0);
  } catch (err) {
    console.error("❌ Redis test failed:", err.message);
    process.exit(1);
  }
}

test();
