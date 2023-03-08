import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { ActionAreaOutcome } from '../../action-area-outcome/entities/action-area-outcome.entity';
import { ActionArea } from '../../action-area/entities/action-area.entity';
import { OutcomeIndicator } from '../../outcome-indicator/entities/outcome-indicator.entity';

@Entity('action_area_outcome_indicators')
export class ActionAreaOutcomeIndicator extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'bigint', nullable: true })
  action_area_outcome_id: number;

  @Column({ type: 'bigint', nullable: true })
  outcome_indicator_id: number;

  @Column({ type: 'bigint', nullable: true })
  action_area_id: number;

  //relations
  @ManyToOne(
    () => ActionAreaOutcome,
    (aao) => aao.action_area_outcome_indicators,
  )
  @JoinColumn({ name: 'action_area_outcome_id' })
  action_area_outcome_object: ActionAreaOutcome;

  @ManyToOne(() => OutcomeIndicator, (oi) => oi.action_area_outcome_indicators)
  @JoinColumn({ name: 'outcome_indicator_id' })
  outcome_indicator_object: OutcomeIndicator;

  @ManyToOne(() => ActionArea, (aao) => aao.action_area_outcome_indicators)
  @JoinColumn({ name: 'action_area_id' })
  action_area_object: ActionArea;
}
