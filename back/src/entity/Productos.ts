import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity() // Especifica el nombre real de la tabla en la base de datos
export class Productos {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column()
    precio: number;

    @Column("uuid")
    categoria_id: string;

    // Otros campos y métodos de la entidad
}
