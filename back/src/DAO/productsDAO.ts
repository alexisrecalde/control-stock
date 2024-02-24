import { AppDataSource } from "../data-source";
import { Productos } from "../entity/Productos";
import { Products } from "../types/productType";

namespace categoryDao {

    export const getProducts = async (): Promise<Products[]> => {   

        const products = await AppDataSource
            .getRepository(Productos)
            .find();
        return products;
    }
}

export default categoryDao;