import { ActionAreaOutcomeIndicator } from 'src/api/action-area-outcome-indicator/entities/action-area-outcome-indicator.entity';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('outcome_indicators')
export class OutcomeIndicator extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  smo_code: string;

  @Column()
  outcome_indicator_statement: string;

  //relations
  @OneToMany(
    () => ActionAreaOutcomeIndicator,
    (aaoi) => aaoi.action_area_outcome_object,
  )
  action_area_outcome_indicators: ActionAreaOutcomeIndicator[];
}
