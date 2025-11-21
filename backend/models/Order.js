import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        title: String,
        price: Number,
        qty: Number,
        imageUrl: String,
      },
    ],
    total: Number,
    status: { type: String, default: "placed" }, // placed, shipped, delivered
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
