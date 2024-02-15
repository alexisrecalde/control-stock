// server-test.ts
import express from 'express';
import { AppDataSource } from './data-source';
import router from './routes';


export const startServer = async () : Promise<express.Application> => {
    const testApp = express();
    AppDataSource
        .initialize()
        .then(() => {
            console.log("Data Source has been initialized!");
        })
        .catch((err) => {
            console.error("Error during Data Source initialization:", err);
        });
    
    testApp.use(router);


    // Puerto diferente para pruebas
    const PORT_TEST = 5002;
    testApp.listen(PORT_TEST, () => {
        console.log(`Test server is running on port ${PORT_TEST}`);
    });
    return testApp
}

export const closeTestServer = async (): Promise<void> => {
  // Cerrar la conexión a la base de datos y realizar tareas de limpieza si es necesario
  await AppDataSource.destroy(); // Asegúrate de tener un método close() en tu clase AppDataSource
};
