import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { InitiativeStage } from './initiative-status.entity';

@Entity('submission_tool_initiatives')
export class Initiative {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'text', nullable: true })
  name: string;

  @Column({ type: 'text', nullable: false })
  short_name: string;

  @Column({ type: 'text', nullable: false })
  official_code: string;

  //object relations

  @OneToMany(() => InitiativeStage, (is) => is.initiative_object)
  initiative_stage_array: InitiativeStage[];

  //auditable fields

  @Column(() => AuditableEntity, { prefix: '' })
  auditableFields: AuditableEntity;
}
