// seedAdmin.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "./models/User.js";
import connectDB from "./config/db.js";

dotenv.config();

async function seed() {
  await connectDB();

  const email = process.env.SEED_ADMIN_EMAIL || "admin@demo.com";
  const pass = process.env.SEED_ADMIN_PASSWORD || "Admin1234";

  const existing = await User.findOne({ email });
  if (existing) {
    console.log("Admin already exists");
    process.exit(0);
  }

  const hash = await bcrypt.hash(pass, 10);

  const user = await User.create({
    name: "Admin",
    email,
    passwordHash: hash,
    role: "admin",
  });

  console.log("Admin created:", user.email);
  process.exit(0);
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
