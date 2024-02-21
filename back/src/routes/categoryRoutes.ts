import express, { Request, Response, Router } from "express";
import { getCategories, addCategory, deleteCategory, updateCategory } from "../service/categoryService"; 

const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    const categories = await getCategories();
    res.status(200).json(categories);
});

router.post("/", async (req: Request, res: Response) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: "Se requiere un nombre para la categoría." });
    }

    const newCategory = await addCategory(name);
    res.status(201).json(newCategory);
});

router.delete("/:id", async (req: Request, res: Response) => {
    const categoryId = req.params.id;
    if (!categoryId) {
        return res.status(400).json({ message: "Se requiere proporcionar un ID de categoría." });
    }

    await deleteCategory(categoryId);
    res.status(200).json({ message: "Categoría eliminada exitosamente." });
});

router.put("/:id", async (req: Request, res: Response) => {
    const categoryId = req.params.id;
    const { name } = req.body;
    if (!categoryId) {
        return res.status(400).json({ message: "Se requiere proporcionar un ID de categoría." });
    }
    if (!name) {
        return res.status(400).json({ message: "Se requiere un nombre para la categoría." });
    }

    await updateCategory(categoryId, name);
    res.status(200).json({ message: "Categoría actualizada exitosamente." });
});

export default router;
