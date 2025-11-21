import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/products.js";
import orderRoutes from "./routes/orders.js";
import connectDB from "./config/db.js"; // ✅ import your DB function

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
// ⚡ CORS configuration
app.use(cors({
  origin: "http://localhost:5173", // allow your frontend origin
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));
// Connect DB
connectDB(); // ✅ use it here

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Server running on", PORT));
// Test route
app.get("/", (req, res) => {
  res.json({ message: "Backend is running fine!" });
});
