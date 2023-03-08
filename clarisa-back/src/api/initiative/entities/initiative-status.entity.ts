import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';

@Entity('submission_tool_initiative_stages')
export class InitiativeStage extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
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
