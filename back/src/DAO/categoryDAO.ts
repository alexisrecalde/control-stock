import { AppDataSource } from "../data-source";
import { Categorias } from "../entity/Categorias";
import { Categorys } from "../types/categoryType";

namespace categoryDao {

    export const getCategories = async (): Promise<Categorys[]> => {   

        const categories = await AppDataSource
            .getRepository(Categorias)
            .find();
        return categories;
    }

    export const addCategory = async (name: string): Promise<Categorys> => {
        const newCategory = new Categorias();
        newCategory.nombre = name;

        await AppDataSource
            .getRepository(Categorias)
            .save(newCategory);

        return newCategory;
    }

    export const deleteCategory = async (categoryId: string): Promise<void> => {
        await AppDataSource
            .getRepository(Categorias)
            .delete(categoryId);
    }

    export const updateCategory = async (categoryId: string, newName: string): Promise<void> => {
        await AppDataSource
            .getRepository(Categorias)
            .update(categoryId, { nombre: newName });
    }
}

export default categoryDao;