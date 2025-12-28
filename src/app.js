import express from "express";
import authRoutes from "./modules/auth/auth.routes.js"
import { errorHandler } from "./middlewares/error.middleware.js";
import userRoutes from "./modules/user/user.routes.js";

const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);


app.use(errorHandler);

export default app;
