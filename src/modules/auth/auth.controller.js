import asyncHandler from "../../utils/asyncHandler.js";
import { signupService } from "./auth.service.js";
import { emailQueue } from "../../queues/email.queue.js";

export const signup = asyncHandler(async (req, res) => {
  const token = await signupService(req.body);

  await emailQueue.add(
    "welcome-email",
    {
      to: req.body.email,
      subject: "Welcome to our platform",
    },
    {
      attempts: 3,
      backoff: {
        type: "exponential",
        delay: 2000,
      },
      delay: 5000,
    }
  );

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    token,
  });
});



export const login = asyncHandler(async (req, res) => {
  const tokens = await loginService(req.body);

  res.status(200).json({
    success: true,
    message: "Login successful",
    tokens,
  });
});
