import { Products } from '../types/productType';
import productDao from "../DAO/productsDAO";

export const getProducts= async (): Promise<Products[]> => {
    const products = await productDao.getProducts();
    
    return products;
}

export const addProduct = async (nombre: string, descripcion: string, categoria_id: string, precio: number): Promise<Products> => {
    const newProduct = await productDao.addProduct(nombre, descripcion, categoria_id, precio);
    return newProduct;
}

export const deleteProduct= async (productId: string): Promise<void> => {
    await productDao.deleteProduct(productId);
}

export const updateProduct = async (productId: string, nombre: string, descripcion: string, categoria_id: string, precio: number): Promise<void> => {
    await productDao.updateProduct(productId, nombre, descripcion, categoria_id, precio);
}