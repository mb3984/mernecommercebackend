// routes/products.js
import express from "express";
import Product from "../models/Product.js";
import { auth, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET /api/products
router.get("/", async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json(products);
});

// GET /api/products/:id
router.get("/:id", async (req, res) => {
  const p = await Product.findById(req.params.id);
  res.json(p);
});

// POST /api/products  (admin)
router.post("/", auth, adminOnly, async (req, res) => {
  const { title, description, price, imageUrl } = req.body;
  const product = await Product.create({
    title,
    description,
    price,
    imageUrl,
    createdBy: req.user.id,
  });
  res.status(201).json(product);
});

// PUT /api/products/:id  (admin)
router.put("/:id", auth, adminOnly, async (req, res) => {
  const p = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(p);
});

// DELETE /api/products/:id (admin)
router.delete("/:id", auth, adminOnly, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;
