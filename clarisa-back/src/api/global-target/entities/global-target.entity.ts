import { Expose, Transform } from 'class-transformer';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { ImpactArea } from '../../impact-area/entities/impact-area.entity';

@Entity('global_targets')
export class GlobalTarget extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  @Expose({ name: 'targetId' })
  id: number;

  @Column()
  @Expose({ name: 'impactAreaId' })
  impact_areas_id: number;

  @ManyToOne(() => ImpactArea, { eager: true })
  @JoinColumn({ name: 'impact_areas_id' })
  @Transform(({ value }) => {
    return value.name;
  })
  @Expose({ name: 'impactAreaName' })
  impact_area_name: ImpactArea;

  @Column()
  @Expose({ name: 'target' })
  global_target: string;
}
