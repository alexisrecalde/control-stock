import VentasProductosDao from '../DAO/ventaProductoDAO';
import VentasDao from '../DAO/ventasDAO';
import { VentaProducto, VentaProductoInput } from '../types/ventaProductoType';
import { Venta } from '../types/ventasType';

// create user

// const productos = [
//     {
//         id: "1",
//         cantidad: 12,
//         precio: 100
//     },
//     {
//         id: "2",
//         cantidad: 4,
//         precio: 200
//     }
// ]

export const createVenta = async (products: VentaProductoInput[], userId: string): Promise<VentaProducto> => {
    const venta = {
        usuario_id: userId
    }
    const res = await VentasDao.createVenta(venta);

    const ventaProducto = products.map((product) => {
        const precio_total = product.cantidad * product.precio;
        return {
            venta_id: res.id,
            producto_id: product.producto_id,
            cantidad: product.cantidad,
            precio_total: precio_total,
        }
    })
    const ventaProductoRes = await Promise.all(ventaProducto.map(async (product) => {

        const res2 = await VentasProductosDao.createProductoVenta(product, res.id);
        return res2;
    }))
    
    return ventaProductoRes as unknown as VentaProducto;
}

// create relacion entre producto y venta

