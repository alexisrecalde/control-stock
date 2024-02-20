import { Categorys } from '../types/categoryType';
import categoryDao from "../DAO/categoryDAO";

export const getCategories = async (): Promise<Categorys[]> => {
    const categories = await categoryDao.getCategories();
    console.log(categories);
    
    return categories;
}