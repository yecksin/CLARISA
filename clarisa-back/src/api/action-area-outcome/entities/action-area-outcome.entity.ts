import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { ActionAreaOutcomeIndicator } from '../../action-area-outcome-indicator/entities/action-area-outcome-indicator.entity';

@Entity('action_area_outcomes')
export class ActionAreaOutcome extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  smo_code: string;

  @Column()
  outcome_statement: string;

  @OneToMany(
    () => ActionAreaOutcomeIndicator,
    (aaoi) => aaoi.action_area_outcome_object,
  )
  action_area_outcome_indicators: ActionAreaOutcomeIndicator[];
}
