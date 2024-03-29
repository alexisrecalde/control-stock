import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity() // Especifica el nombre real de la tabla en la base de datos
export class Categorias {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    nombre: string;

    // Otros campos y métodos de la entidad
}
