import mongoose from 'mongoose';


const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true, // searching fast
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      index: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);