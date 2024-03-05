export type VentaProducto = {
    id: string;
    venta_id: string;
    producto_id: string;
    cantidad: number;
    precio_total: number;
};

export type VentaProductoInput = {
    venta_id: string;
    producto_id: string;
    cantidad: number;
    precio_total: number;
    precio: number;
};