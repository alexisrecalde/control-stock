import { AppDataSource } from "../data-source";
import { Category } from "../entity/Category";
import { Categorys } from "../types/categoryType";

namespace categoryDao {
    export const getCategories = async (): Promise<Categorys[]> => {   
        const categories = await AppDataSource.getRepository(Category)
            .find();
        return categories;
    }
}

export default categoryDao;