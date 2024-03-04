import VentasDao from '../DAO/ventasDAO';
import { Venta } from '../types/ventasType';

// create user

export const createVenta = async (productos: string[], userId: string): Promise<Venta> => {
    const venta = {
        usuario_id: userId
    }
    const res = await VentasDao.createVenta(venta);
    return res;
}

// create relacion entre producto y venta

