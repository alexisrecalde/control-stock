import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { Categorias } from "./Categorias";

@Entity()
export class Productos {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({nullable: true})
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: true })
    price: number;

    @ManyToOne(() => Categorias, { nullable: true }) // Establece la relación muchos a uno
    @JoinColumn({ name: 'category_id' }) // Indica la columna de la clave foránea
    categoria: Categorias; // Puedes acceder a la categoría directamente desde el producto

    @Column({ nullable: true })
    category_id: string;

    @BeforeInsert()
    generateId() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}
