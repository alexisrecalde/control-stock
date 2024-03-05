import { DeepPartial } from 'typeorm';
import { AppDataSource } from "../data-source";
import { VentasProductos } from '../entity/VentaProducto';
import { VentaProducto } from '../types/ventaProductoType';


namespace VentasProductosDao {

    export const createProductoVenta = async (ventaProducto: Partial<VentaProducto>, ventaId: string): Promise<Partial<VentaProducto>> => {
        const ventasProductosRepository = AppDataSource.getRepository(VentasProductos);

        const nuevoVentasProducto = ventasProductosRepository.create({
            producto_id: ventaProducto.producto_id,
            cantidad: ventaProducto.cantidad,
            precio_total: ventaProducto.precio_total,
            venta_id: ventaId,
        } as DeepPartial<VentasProductos>); 

        const res = await ventasProductosRepository.save(nuevoVentasProducto);

        return res;
    }
}

export default VentasProductosDao;