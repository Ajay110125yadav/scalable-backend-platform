import bcrypt from "bcryptjs";
import User from "../../models/user.model.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../utils/token.js";

export const signupService = async ({ name, email, password }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return {
    id: user._id,
    email: user.email,
  };
};

export const loginService = async ({ email, password }) => {
  const user = await User.findOne({ email }).select(
    "+password +refreshToken"
  );

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const accessToken = generateAccessToken({
    id: user._id,
    role: user.role,
  });

  const refreshToken = generateRefreshToken({
    id: user._id,
  });

  user.refreshToken = refreshToken;
  await user.save();

  return { accessToken, refreshToken };
};
