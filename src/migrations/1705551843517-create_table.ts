import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1705551843517 implements MigrationInterface {
    name = 'CreateTable1705551843517'

    

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
        await queryRunner.query(`
            CREATE TYPE "user_roles_enum" AS ENUM ('admin', 'user', 'guest');

            CREATE TABLE "users" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nombre" character varying NOT NULL,
                "apellido" character varying NOT NULL,
                "email" character varying NOT NULL,
                "rol" "user_roles_enum" NOT NULL,
                "password" character varying NOT NULL,
                CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"),
                CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
            )
        `);
    }
    

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
