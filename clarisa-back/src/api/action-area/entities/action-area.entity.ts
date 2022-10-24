import { ActionAreaOutcomeIndicator } from 'src/api/action-area-outcome-indicator/entities/action-area-outcome-indicator.entity';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('action_areas')
export class ActionArea extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ select: false })
  smo_code: string;

  @Column()
  name: string;

  @Column()
  description: string;

  //relations
  @OneToMany(
    () => ActionAreaOutcomeIndicator,
    (aaoi) => aaoi.action_area_outcome_object,
  )
  action_area_outcome_indicators: ActionAreaOutcomeIndicator[];
}
