import { Router } from 'express';
import { createOrder } from './order.controller.js';
import { protect } from '../../middlewares/auth.middleware.js';

const router = Router();

router.post("/", protect, createOrder);

export default router;