import "dotenv/config";
import app from "./app.js";
import connectDB from "./config/db.js";

const startServer = async () => {
  try {
    await connectDB();   // 🔥 VERY IMPORTANT
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  } catch (err) {
    console.error("❌ Server start failed", err);
    process.exit(1);
  }
};

startServer();