import express, { Request, Response, Router } from "express";
import { getProducts, addProduct, deleteProduct, updateProduct} from "../service/productService"; 

const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    const products = await getProducts();
    res.status(200).json(products);
});

router.post("/create", async (req: Request, res: Response) => {

    const { nombre, descripcion, categoria_id, precio } = req.body;
    const newProduct = await addProduct(nombre, descripcion, categoria_id, precio);
    res.status(201).json(newProduct);
});

router.delete("/:id", async (req: Request, res: Response) => {
    const productId = req.params.id;
    if (!productId) {
        return res.status(400).json({ message: "Se requiere proporcionar un ID del producto." });
    }

    await deleteProduct(productId);
    res.status(200).json({ message: "Producto eliminado exitosamente." });
});

router.patch("/update/:id", async (req: Request, res: Response) => {
    const productId = req.params.id;
    const { nombre, descripcion, categoria_id, precio } = req.body;

    if (!productId) {
        return res.status(400).json({ message: "Se requiere proporcionar un ID de producto." });
    }

    await updateProduct(productId, nombre, descripcion, categoria_id, precio);
    res.status(200).json({ message: "Producto actualizada exitosamente." });
});

export default router;