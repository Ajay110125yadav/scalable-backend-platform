import asyncHandler from '../../utils/asyncHandler.js';
import { createOrderService } from './order.service.js';

export const createOrder = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const order = await createOrderService({
    userId,
    items: req.body.items,
  });

  res.status(201).json({
    success: true,
    message: "Order placed successfully",
    order,
  });
});