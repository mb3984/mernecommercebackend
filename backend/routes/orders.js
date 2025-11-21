// routes/orders.js
import express from "express";
import Order from "../models/Order.js";
import { auth } from "../middleware/authMiddleware.js";

const router = express.Router();

// POST /api/orders  (create order)
router.post("/", auth, async (req, res) => {
  const { items, total } = req.body; // items: [{product, title, price, qty, imageUrl}]
  const order = await Order.create({ user: req.user.id, items, total });
  res.status(201).json(order);
});

// GET /api/orders/my  (user's orders)
router.get("/my", auth, async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).sort({
    createdAt: -1,
  });
  res.json(orders);
});

// GET /api/orders/ (admin sees all)
router.get("/", auth, async (req, res) => {
  if (req.user.role !== "admin")
    return res.status(403).json({ message: "Admin only" });
  const all = await Order.find().populate("user").sort({ createdAt: -1 });
  res.json(all);
});

export default router;
