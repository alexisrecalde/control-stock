import { AppDataSource } from './data-source';
import { authenticateToken } from './middleware/authenticator';
import router from './routes';
import express from 'express';
import cors from 'cors';
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
app.use(cors());
app.use(express.json());
app.use(router);

export default app;