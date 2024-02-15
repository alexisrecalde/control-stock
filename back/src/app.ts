import express from "express";
import { AppDataSource } from "./data-source";
import usersRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authenticateRoutes";
import { authenticateToken } from './middleware/authenticator';
import router from './routes';
import app from './server';

// Iniciar el servidor
const PORT = 5000 || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


