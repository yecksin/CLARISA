import { Exclude, Expose, Transform } from 'class-transformer';
import { ActionAreaOutcome } from 'src/api/action-area-outcome/entities/action-area-outcome.entity';
import { ActionArea } from 'src/api/action-area/entities/action-area.entity';
import { OutcomeIndicator } from 'src/api/outcome-indicator/entities/outcome-indicator.entity';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('action_area_outcome_indicators')
export class ActionAreaOutcomeIndicator extends AuditableEntity {
  @Exclude()
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ActionAreaOutcome, { eager: true })
  @JoinColumn({ name: 'action_area_outcome_id' })
  @Transform(({ value }) => {
    return value;
  })
  @Expose({ name: 'outcomeId' })
  action_area_outcome_id: ActionAreaOutcome;

  @ManyToOne(() => OutcomeIndicator, { eager: true })
  @JoinColumn({ name: 'outcome_indicator_id' })
  @Transform(({ value }) => {
    return value;
  })
  @Expose({ name: 'outcomeIndicatorId' })
  outcome_indicator_id: OutcomeIndicator;

  @ManyToOne(() => ActionArea, { eager: true })
  @JoinColumn({ name: 'action_area_id' })
  @Transform(({ value }) => {
    return value;
  })
  @Expose({ name: 'ActionAreaName' })
  action_area_name: ActionArea;
}
