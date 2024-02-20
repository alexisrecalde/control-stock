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
}

export default categoryDao;