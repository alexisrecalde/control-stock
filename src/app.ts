import express from "express";
import { AppDataSource } from "./data-source";
import usersRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authenticateRoutes";
import { authenticateToken } from './middleware/authenticator';

// Inicializar la conexión a la base de datos
AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });

const app = express();
app.use(express.json());
app.use(authenticateToken);


// Registrar las rutas
app.use("/api/users",authenticateToken, usersRoutes);
app.use("/api/auth", authRoutes);

// Iniciar el servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
