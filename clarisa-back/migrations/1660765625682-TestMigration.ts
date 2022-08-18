import { MigrationInterface, QueryRunner } from "typeorm"

export class TestMigration1660765625682 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        console.log("testing migration");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        console.log("migration done");
    }

}
