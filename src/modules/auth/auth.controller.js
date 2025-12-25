import asyncHandler from "../../utils/asyncHandler.js";
import { signupService, loginService } from "./auth.service.js";

export const signup = asyncHandler(async (req, res) => {
  const token = await signupService(req.body);

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    token,
  });
});

export const login = asyncHandler(async (req, res) => {
  const token = await loginService(req.body);

  res.status(200).json({
    success: true,
    message: "Login successful",
    token,
  });
});
