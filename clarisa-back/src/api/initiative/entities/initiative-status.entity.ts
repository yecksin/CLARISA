import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('submission_tool_initiative_stages')
export class InitiativeStage extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  initiative_id: number;

  @Column()
  stage_id: number;

  @Column()
  status: string;

  @Column({ type: 'tinyint' })
  is_global_dimension: boolean;

  @Column()
  action_area_id: number;
}
