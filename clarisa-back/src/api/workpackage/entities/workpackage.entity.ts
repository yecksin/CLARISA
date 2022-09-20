import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('submission_tool_work_packages')
export class Workpackage extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  results: string;

  @Column()
  pathway_content: string;

  @Column({ type: 'tinyint' })
  is_global_dimension: boolean;

  @Column()
  submission_tool_initiative_stage_id: number;

  @Column()
  acronym: string;

  @Column()
  wp_official_code: number;
}
