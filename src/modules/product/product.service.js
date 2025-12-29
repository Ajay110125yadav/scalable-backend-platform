import Product from '../../models/product.model.js';

export const createProductService = async (data) => {
  return await Product.create(data);
};

export const getProductsService = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;

  const products = await Product.find({ isDeleted: false })
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 });
};