import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { ImpactArea } from '../../impact-area/entities/impact-area.entity';

@Entity('impact_area_indicators')
export class ImpactAreaIndicator extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  indicator_statement: string;

  @Column()
  impact_areas_id: number;

  @Column()
  target_year: number;

  @Column()
  target_unit: string;

  @Column()
  target_value: string;

  @Column()
  is_aplicable_projected_benefits: boolean;

  @Column()
  smo_code: string;

  //relations
  @ManyToOne(() => ImpactArea, (ia) => ia.impact_area_indicators)
  @JoinColumn({ name: 'impact_areas_id' })
  impact_area_object: ImpactArea;
}
