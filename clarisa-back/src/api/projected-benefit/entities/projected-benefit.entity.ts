import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { ImpactAreaIndicator } from '../../impact-area-indicators/entities/impact-area-indicator.entity';

@Entity('projected_benefits')
export class ProjectedBenefit extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  impact_area_indicator_id: number;

  @ManyToOne(() => ImpactAreaIndicator)
  @JoinColumn({ name: 'impact_area_indicator_id' })
  impact_area_indicator_object: ImpactAreaIndicator;

  @Column()
  description: string;
}
