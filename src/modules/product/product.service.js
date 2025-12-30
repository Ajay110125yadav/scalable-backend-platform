import Product from '../../models/product.model.js';
import redis from '../../config/redis.js';

export const createProductService = async (data) => {
  return await Product.create(data);

  await redis.del("products: list");

  return Product;
};

export const getProductsService = async (page = 1, limit = 10) => {
  const cacheKey = `products: list:{page}:${limit}`;
  
  const cached = await redis.get(cacheKey);
  if (cached) {
    return JSON.parse(cached);
  }

  const skip = (page - 1) * limit;

  const products = await Product.find({ isDeleted: false })
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 })
    .lean();

  await redis.set(cacheKey, JSON.stringify(products), "EX", 60);

  return products;
};