import express, { Request, Response, Router } from "express";
import { createVenta } from "../service/ventasService";
import { Venta } from "../types/ventasType";


const router: Router = express.Router();

const productos = [
    {
        id: "77777777-7777-7777-7777-777777777777",
        nombre: "Smartphone",
        descripcion: "Teléfono inteligente",
        precio: 100,
        categoria_id: "55555555-5555-5555-5555-555555555555"
    },
    {
        id: "88888888-8888-8888-8888-888888888888",
        nombre: "Producto 2",
        descripcion: "Descripcion 2",
        precio: 200,
        categoria_id: "55555555-5555-5555-5555-555555555555"
    },
    {
        id: "99999999-9999-9999-9999-999999999999",
        nombre: "Producto 3",
        descripcion: "Descripcion 3",
        precio: 300,
        categoria_id: "55555555-5555-5555-5555-555555555555"
    }
]

router.post("/create", async (req: Request, res: Response) => {
    const userId = req.user.id;
    const productos: string[] = req.body;
    const newUser = await createVenta(productos, userId)
    res.status(200).json(newUser);
});


export default router;
