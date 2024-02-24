// routes.ts
import express from 'express';
import usersRoutes from './routes/userRoutes';
import authRoutes from './routes/authenticateRoutes';
import categoryRoutes from './routes/categoryRoutes';
import productRoutes from './routes/productRoutes';

import { authenticateToken } from './middleware/authenticator';

const router = express.Router();

router.use("/api/users",authenticateToken, usersRoutes);
router.use("/api/auth", authRoutes);
router.use("/api/categorias", categoryRoutes);
router.use("/api/productos", productRoutes);


export default router;
