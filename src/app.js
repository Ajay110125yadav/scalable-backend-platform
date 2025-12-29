import express from "express";
import authRoutes from "./modules/auth/auth.routes.js"
import { errorHandler } from "./middlewares/error.middleware.js";
import userRoutes from "./modules/user/user.routes.js";
import productRoutes from "./modules/product/product.routes.js";
import orderRoutes from "./modules/order/order.routes.js";

const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);


app.use(errorHandler);

export default app;
