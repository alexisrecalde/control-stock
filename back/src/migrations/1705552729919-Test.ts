import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1705552729919 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `
                ALTER TABLE "users" ADD COLUMN test VARCHAR(255);
            `
        );
       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
