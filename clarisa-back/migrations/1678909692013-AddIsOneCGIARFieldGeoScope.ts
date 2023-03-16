import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddIsOneCGIARFieldGeoScope1678909692013
  implements MigrationInterface
{
  name = 'AddIsOneCGIARFieldGeoScope1678909692013';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`geographic_scopes\` ADD \`is_one_cgiar\` tinyint(1) NOT NULL DEFAULT 1 AFTER \`definition\``,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`geographic_scopes\` DROP COLUMN \`is_one_cgiar\``,
    );
  }
}
