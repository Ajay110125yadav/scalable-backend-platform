import { Worker } from "bullmq";
import redis from "../config/redis.js";

console.log("🔥 EMAIL WORKER FILE LOADED");

const worker = new Worker(
  "email-queue",
  async (job) => {
    console.log("📧 Email job:", job.data);
  },
  {
    connection: redis,   // 🔥 THIS LINE FIXES ECONNREFUSED
  }
);

worker.on("completed", () => {
  console.log("✅ Job completed");
});

worker.on("failed", (job, err) => {
  console.error("❌ Job failed:", err.message);
});
