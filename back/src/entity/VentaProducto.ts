import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, JoinColumn, BeforeInsert } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Users } from './User';
import { Ventas } from './Ventas';
import { Productos } from './Productos';

@Entity({ name: 'venta_productos' })
export class VentasProductos {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    venta_id: string;

    @Column()
    producto_id: string;

    @ManyToOne(() => Users)
    @JoinColumn({ name: 'venta_id' })
    venta: Ventas;

    @ManyToOne(() => Productos)
    @JoinColumn({ name: 'producto_id' })
    producto: Productos;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;

    @DeleteDateColumn({ type: 'timestamp' })
    deleted_at: Date;

    @BeforeInsert()
    generateId() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}
