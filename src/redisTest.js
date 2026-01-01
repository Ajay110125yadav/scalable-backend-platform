import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL, {
  tls: {},              // 🔥 REQUIRED for Upstash
  maxRetriesPerRequest: null,
  enableReadyCheck: false,
  family: 4,            // 🔥 force IPv4 (no ::1)
});

redis.on("connect", () => console.log("✅ Redis connected"));
redis.on("ready", () => console.log("🚀 Redis ready"));
redis.on("error", (err) => console.error("❌ Redis error:", err.message));

export default redis;
