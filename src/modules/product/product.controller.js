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
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10

  const products = await getProductsService(page, limit);

  res.status(200).json({
    success: true,
    source: "redis/db",
    products,
  });
});