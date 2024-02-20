import express, { Request, Response, Router } from "express";
import { getCategories } from "../service/categoryService";

const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    const categories = await getCategories();
    res.status(200).json(categories);
});

export default router;