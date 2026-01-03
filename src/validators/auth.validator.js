import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(3, "Name too short"),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 chars"),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});