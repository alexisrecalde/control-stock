import { AppDataSource } from "../data-source";
import { Users } from "../entity/User";
import { Ventas } from "../entity/Ventas";
import { EncryptedPassword, User } from '../types/userType';
import { Venta } from "../types/ventasType";


namespace VentasDao {
    export const createVenta = async (venta: Partial<Venta>): Promise<Venta> => {
        const newUser = await AppDataSource
            .getRepository(Ventas)
            .save(venta);
        return newUser;
    }

    // create relacion entre producto y venta
    export const createRelacionProductoVenta = async (productoId: string, ventaId: string): Promise<void> => {
        await AppDataSource
            .createQueryBuilder()
            .relation(Ventas, "productos")
            .of(ventaId)
            .add(productoId);
    }

  
}

export default VentasDao;