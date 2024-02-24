import { MigrationInterface, QueryRunner } from "typeorm";

export class SEED1708053206396 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "roles" ("id", "nombre", "created_at", "updated_at", "deleted_at") VALUES
            ('11111111-1111-1111-1111-111111111111', 'admin', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
            ('22222222-2222-2222-2222-222222222222', 'user', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL);
        `);

        // Insertar datos en la tabla users
        await queryRunner.query(`
           INSERT INTO "users" ("id", "nombre", "apellido", "email", "rol", "password", "created_at", "updated_at", "deleted_at") VALUES
('33333333-3333-3333-3333-333333333333', 'Admin', 'User', 'admin@example.com', 'admin', 'hashedpassword', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
('44444444-4444-4444-4444-444444444444', 'Regular', 'User', 'user@example.com', 'user', 'hashedpassword', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL);

        `);

        // Insertar datos en la tabla categorias
        await queryRunner.query(`
            INSERT INTO "categorias" ("id", "nombre", "created_at", "updated_at", "deleted_at") VALUES
            ('55555555-5555-5555-5555-555555555555', 'Electrónicos', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
            ('66666666-6666-6666-6666-666666666666', 'Ropa', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL);
        `);

        // Insertar datos en la tabla productos
        await queryRunner.query(`
            INSERT INTO "productos" ("id", "nombre", "descripcion", "precio", "created_at", "updated_at", "deleted_at", "categoria_id") VALUES
            ('77777777-7777-7777-7777-777777777777', 'Smartphone', 'Teléfono inteligente', 500, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, '55555555-5555-5555-5555-555555555555'),
            ('88888888-8888-8888-8888-888888888888', 'Laptop', 'Computadora portátil', 1000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, '55555555-5555-5555-5555-555555555555'),
            ('99999999-9999-9999-9999-999999999999', 'Camiseta', 'Ropa casual', 20, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, '66666666-6666-6666-6666-666666666666'),
            ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'Auriculares', 'Auriculares inalámbricos', 50, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, '55555555-5555-5555-5555-555555555555');        
        `);

        // Insertar datos en la tabla ventas
        await queryRunner.query(`
            INSERT INTO "ventas" ("id", "usuario_id", "created_at", "updated_at", "deleted_at") VALUES
            ('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', '33333333-3333-3333-3333-333333333333', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL);
        `);

        // Insertar datos en la tabla venta_productos
        await queryRunner.query(`
            INSERT INTO "venta_productos" ("id", "venta_id", "producto_id", "cantidad", "precio_total") VALUES
            ('cccccccc-cccc-cccc-cccc-cccccccccccc', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', '77777777-7777-7777-7777-777777777777', '2', '1000'),
            ('dddddddd-dddd-dddd-dddd-dddddddddddd', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', '88888888-8888-8888-8888-888888888888', '1', '1000'),
            ('eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', '99999999-9999-9999-9999-999999999999', '3', '60');
        `);

        // Insertar datos en la tabla tipos_operacion
        await queryRunner.query(`
           INSERT INTO "tipos_operacion" ("id", "nombre", "created_at", "updated_at", "deleted_at") VALUES
('fffffff1-ffff-ffff-ffff-ffffffffffff', 'Venta', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL),
('fffffff2-ffff-ffff-ffff-ffffffffffff', 'Compra', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL);



        `);

        // Insertar datos en la tabla operaciones
        await queryRunner.query(`
            INSERT INTO "operaciones" ("id", "venta_id", "tipo_operacion_id", "created_at", "updated_at", "deleted_at") VALUES
            ('fffffff3-ffff-ffff-ffff-ffffffffffff', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'fffffff1-ffff-ffff-ffff-ffffffffffff', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL);
        `);

        // Insertar datos en la tabla caja
        await queryRunner.query(`
            INSERT INTO "caja" ("id", "monto", "tipo_operacion_id", "venta_id", "created_at", "updated_at", "deleted_at") VALUES
            ('ffffff10-ffff-ffff-ffff-ffffffffffff', '2060', 'fffffff1-ffff-ffff-ffff-ffffffffffff', 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL);
        `);
        
}

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
