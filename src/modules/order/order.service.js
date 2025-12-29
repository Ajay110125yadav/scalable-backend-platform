import mongoose from 'mongoose';
import Order from '../../models/order.model.js';
import Product from "../../models/product.model.js";


export const createOrderService = async ({ userId, items }) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    let totalAmount = 0;


    for (const item of items) {
      const product = await Product.findById(item.product).session(session);

      if (!product || product.stock < item.quantity) {
        throw new Error("Product out of stock");
      }

      product.stock -= item.quantity;
      await product.save({ session });

      totalAmount += product.price * item.quantity;
    }

    const order = await Order.create(
      [
        {
          user: userId,
          items,
          totalAmount,
        },
      ],
      { session }
    );

    await session.commitTransaction();
    session.endSession();

    return order[0];
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    throw err;
  }
};