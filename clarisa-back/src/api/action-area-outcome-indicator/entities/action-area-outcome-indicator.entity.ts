import { ActionAreaOutcome } from 'src/api/action-area-outcome/entities/action-area-outcome.entity';
import { ActionArea } from 'src/api/action-area/entities/action-area.entity';
import { OutcomeIndicator } from 'src/api/outcome-indicator/entities/outcome-indicator.entity';
 import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('action_area_outcome_indicators')
export class ActionAreaOutcomeIndicator extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  action_area_outcome_id: number;

  @Column()
  outcome_indicator_id: number;

  @Column()
  action_area_id: number;

  @ManyToOne(() => ActionAreaOutcome)
  @JoinColumn({ name: 'action_area_outcome_id' })
  action_area_outcome_object: ActionAreaOutcome;

  @ManyToOne(() => OutcomeIndicator)
  @JoinColumn({ name: 'outcome_indicator_id' })
  outcome_indicator_object: OutcomeIndicator;

  @ManyToOne(() => ActionArea)
  @JoinColumn({ name: 'action_area_id' })
  action_area_object: ActionArea;
}
