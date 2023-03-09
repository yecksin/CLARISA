import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { InitiativeStage } from './initiative-status.entity';

@Entity('submission_tool_stages')
export class Stage extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: 500, nullable: false })
  description: string;

  //object relations

  @OneToMany(() => InitiativeStage, (is) => is.stage_object)
  initiative_stage_array: InitiativeStage[];
}
