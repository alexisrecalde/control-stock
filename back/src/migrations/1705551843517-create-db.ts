import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCompleteDatabase1705551843518 implements MigrationInterface {
    name = 'CreateCompleteDatabase1705551843518'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
        
        // Roles
        await queryRunner.query(`
            CREATE TYPE "user_roles_enum" AS ENUM ('admin', 'user', 'proveedor');
        `);

        // Users
        await queryRunner.query(`
            CREATE TABLE "users" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nombre" character varying NOT NULL,
                "apellido" character varying NOT NULL,
                "email" character varying NOT NULL,
                "rol" "user_roles_enum" NOT NULL,
                "password" character varying NOT NULL,
                "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                "deleted_at" TIMESTAMP,
                CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"),
                CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
            )
        `);

        // Roles
        await queryRunner.query(`
            CREATE TABLE "roles" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nombre" character varying NOT NULL,
                "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                "deleted_at" TIMESTAMP,
                CONSTRAINT "PK_roles" PRIMARY KEY ("id")
            )
        `);

        // Relación Users con Roles
        await queryRunner.query(`
            ALTER TABLE "users" ADD "rol_id" uuid;
            ALTER TABLE "users" ADD CONSTRAINT "FK_users_roles" FOREIGN KEY ("rol_id") REFERENCES "roles"("id") ON DELETE SET NULL;
        `);

        // Productos
        await queryRunner.query(`
            CREATE TABLE "productos" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nombre" character varying NOT NULL,
                "descripcion" character varying NOT NULL,
                "precio" numeric NOT NULL,
                "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                "deleted_at" TIMESTAMP,
                CONSTRAINT "PK_productos" PRIMARY KEY ("id")
            )
        `);

        // Categorias
        await queryRunner.query(`
            CREATE TABLE "categorias" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nombre" character varying NOT NULL,
                "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                "deleted_at" TIMESTAMP,
                CONSTRAINT "PK_categorias" PRIMARY KEY ("id")
            )
        `);

        // Relación Categorias con Productos
        await queryRunner.query(`
            ALTER TABLE "productos" ADD "categoria_id" uuid;
            ALTER TABLE "productos" ADD CONSTRAINT "FK_productos_categorias" FOREIGN KEY ("categoria_id") REFERENCES "categorias"("id") ON DELETE SET NULL;
        `);

        // Ventas
        await queryRunner.query(`
            CREATE TABLE "ventas" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "usuario_id" uuid NOT NULL,
                "producto_id" uuid NOT NULL,
                "cantidad" integer NOT NULL,
                "precio_total" numeric NOT NULL,
                "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                "deleted_at" TIMESTAMP,
                CONSTRAINT "PK_ventas" PRIMARY KEY ("id"),
                CONSTRAINT "FK_ventas_users" FOREIGN KEY ("usuario_id") REFERENCES "users"("id"),
                CONSTRAINT "FK_ventas_productos" FOREIGN KEY ("producto_id") REFERENCES "productos"("id")
            )
        `);

        // Tipos de Operacion
        await queryRunner.query(`
            CREATE TABLE "tipos_operacion" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nombre" character varying NOT NULL,
                "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                "deleted_at" TIMESTAMP,
                CONSTRAINT "PK_tipos_operacion" PRIMARY KEY ("id")
            )
        `);

        // Operaciones
        await queryRunner.query(`
            CREATE TABLE "operaciones" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "venta_id" uuid,
                "tipo_operacion_id" uuid,
                "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                "deleted_at" TIMESTAMP,
                CONSTRAINT "PK_operaciones" PRIMARY KEY ("id"),
                CONSTRAINT "FK_operaciones_ventas" FOREIGN KEY ("venta_id") REFERENCES "ventas"("id") ON DELETE SET NULL,
                CONSTRAINT "FK_operaciones_tipos_operacion" FOREIGN KEY ("tipo_operacion_id") REFERENCES "tipos_operacion"("id") ON DELETE SET NULL
            )
        `);

        // Caja
        await queryRunner.query(`
            CREATE TABLE "caja" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "monto" numeric NOT NULL,
                "tipo_operacion_id" uuid NOT NULL,
                "venta_id" uuid,
                "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                "deleted_at" TIMESTAMP,
                CONSTRAINT "PK_caja" PRIMARY KEY ("id"),
                CONSTRAINT "FK_caja_tipos_operacion" FOREIGN KEY ("tipo_operacion_id") REFERENCES "tipos_operacion"("id"),
                CONSTRAINT "FK_caja_ventas" FOREIGN KEY ("venta_id") REFERENCES "ventas"("id") ON DELETE SET NULL
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop tables in reverse order
        await queryRunner.query(`DROP TABLE "caja"`);
        await queryRunner.query(`DROP TABLE "operaciones"`);
        await queryRunner.query(`DROP TABLE "tipos_operacion"`);
        await queryRunner.query(`DROP TABLE "ventas"`);
        await queryRunner.query(`DROP TABLE "productos"`);
        await queryRunner.query(`DROP TABLE "categorias"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TYPE "user_roles_enum"`);
    }
}
