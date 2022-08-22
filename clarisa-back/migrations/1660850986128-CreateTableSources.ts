
import { query } from "express"
import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTableSources1660850986128 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`create table sources(
            id bigint NOT NULL AUTO_INCREMENT,
            name text NOT NULL,
            acronym text NOT NULL,
            contact_point_id bigint DEFAULT NULL,
            created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            is_active tinyint(1) NOT NULL DEFAULT '1',
            PRIMARY KEY (id),
            CONSTRAINT gu_contact_point_fk FOREIGN KEY (contact_point_id) REFERENCES users (id)
        ) ENGINE=InnoDB;`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`drop table sources;`);
    }

}
