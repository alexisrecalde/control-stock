import { MigrationInterface, QueryRunner } from "typeorm";

export class NEWTABLEVENTASPRODUCTOS1708049301126 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE "venta_productos" 
        (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
            "venta_id" uuid NOT NULL,
            "producto_id" uuid NOT NULL,
            "cantidad" integer NOT NULL,
            "precio_total" numeric NOT NULL,
            CONSTRAINT "PK_venta_productos" PRIMARY KEY ("id"),
            CONSTRAINT "FK_venta_productos_ventas" FOREIGN KEY ("venta_id") REFERENCES "ventas"("id") ON DELETE CASCADE,
            CONSTRAINT "FK_venta_productos_productos" FOREIGN KEY ("producto_id") REFERENCES "productos"("id") ON DELETE CASCADE
        )
`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
