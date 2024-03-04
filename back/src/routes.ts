// routes.ts
import express from 'express';
import usersRoutes from './routes/userRoutes';
import authRoutes from './routes/authenticateRoutes';
import categoryRoutes from './routes/categoryRoutes';
import ventasRoutes from './routes/ventasRoutes';
import { authenticateToken } from './middleware/authenticator';

const router = express.Router();

router.use("/api/users",authenticateToken, usersRoutes);
router.use("/api/auth", authRoutes);
router.use("/api/category", categoryRoutes);
router.use("/api/ventas", authenticateToken, ventasRoutes);

export default router;
