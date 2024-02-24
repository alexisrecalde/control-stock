import express, { Request, Response, Router } from "express";
import { getProducts } from "../service/productService"; 

const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    const products = await getProducts();
    res.status(200).json(products);
});

export default router;