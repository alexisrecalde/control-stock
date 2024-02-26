import { AppDataSource } from "../data-source";
import { Productos } from "../entity/Productos";
import { Products } from "../types/productType";

namespace productDao {

    export const getProducts = async (): Promise<Products[]> => {   

        const products = await AppDataSource
            .getRepository(Productos)
            .find();
        return products;
    }

    export const addProduct = async (nombre: string, descripcion: string, categoria_id: string, precio: number): Promise<Products> => {
        const newProduct = new Productos();
        newProduct.nombre = nombre;
        newProduct.descripcion = descripcion;
        newProduct.categoria_id = categoria_id;
        newProduct.precio = precio;

        await AppDataSource
            .getRepository(Productos)
            .save(newProduct);

        return newProduct;
    }

    export const deleteProduct = async (productId: string): Promise<void> => {
        await AppDataSource
            .getRepository(Productos)
            .delete(productId);
    }

    export const updateProduct = async (productId: string, nombre: string, descripcion: string, categoria_id: string, precio: number): Promise<void> => {
        await AppDataSource
            .getRepository(Productos)
            .update(productId, {nombre, descripcion, categoria_id, precio});
    }
}

export default productDao;