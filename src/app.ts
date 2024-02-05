import express from "express";
import { AppDataSource } from "./data-source";
import usersRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authenticateRoutes";

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

// Registrar las rutas
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);

// Iniciar el servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
