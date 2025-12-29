import { Router } from 'express';
import {
  createProduct,
  getProducts,
} from './product.controller.js';

const router = Router();

router.post("/", createProduct);
router.get("/", getProducts);

export default router;