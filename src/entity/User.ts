import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from "typeorm"
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Users {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column({ unique: true })
    email: string;

    @Column({ type: "enum", enum: ["admin", "user", "guest"] })
    rol: string;

    @Column()
    password: string;

    @Column({ nullable: true }) 
    test?: string;

    @BeforeInsert()
    generateId() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}
