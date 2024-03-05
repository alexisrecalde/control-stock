import express, { Request, Response, Router } from "express";
import { createVenta } from "../service/ventasService";
import { Venta } from "../types/ventasType";


const router: Router = express.Router();

router.post("/create", async (req: Request, res: Response) => {
    const userId = req.user.id;
    const productos = req.body;
    const newUser = await createVenta(productos, userId)
    res.status(200).json(newUser);
});

export default router;
