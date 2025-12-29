import asyncHandler from '../../utils/asyncHandler.js';
import {
  createProductService,
  getProductsService,
} from './product.service.js';

export const createProduct = asyncHandler(async (req, res) => {
  const product = await createProductService(req.body);
  res.status(201).json({
    success: true,
    message: "Product created",
    product,
  });
});

export const getProducts = asyncHandler(async (req, res) => {
  const { page, limit } = req.query;

  const products = await getProductsService(page, limit);

  limit.status(200).json({
    success: true,
    products,
  });
});