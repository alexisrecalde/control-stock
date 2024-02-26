import { Categorys } from '../types/categoryType';
import categoryDao from "../DAO/categoryDAO";

export const getCategories = async (): Promise<Categorys[]> => {
    const categories = await categoryDao.getCategories();
    
    return categories;
}

export const addCategory = async (name: string): Promise<Categorys> => {
    const newCategory = await categoryDao.addCategory(name);
    
    return newCategory;
}

export const deleteCategory = async (categoryId: string): Promise<void> => {
    await categoryDao.deleteCategory(categoryId);
}

export const updateCategory = async (categoryId: string, newName: string): Promise<void> => {
    await categoryDao.updateCategory(categoryId, newName);
}

