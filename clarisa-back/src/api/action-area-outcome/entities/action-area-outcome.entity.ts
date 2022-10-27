import { ActionAreaOutcomeIndicator } from 'src/api/action-area-outcome-indicator/entities/action-area-outcome-indicator.entity';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
