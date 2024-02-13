// routes.ts
import express from 'express';
import usersRoutes from './routes/userRoutes';
import authRoutes from './routes/authenticateRoutes';
import { authenticateToken } from './middleware/authenticator';

const router = express.Router();

router.use("/api/users",authenticateToken, usersRoutes);
router.use("/api/auth", authRoutes);

export default router;
