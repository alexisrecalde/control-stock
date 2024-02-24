import { Products } from '../types/productType';
import productDao from "../DAO/productsDAO";

export const getProducts= async (): Promise<Products[]> => {
    const products = await productDao.getProducts();
    
    return products;
}