import { Expose, Transform } from 'class-transformer';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ImpactArea } from '../../impact-area/entities/impact-area.entity';

@Entity('global_targets')
export class GlobalTarget extends AuditableEntity {
  @PrimaryGeneratedColumn()
  @Expose({ name: 'targetId' })
  id: number;

  @Column()
  @Expose({ name: 'impactAreasId' })
  impact_areas_id: number;

  @ManyToOne(() => ImpactArea, { eager: true })
  @JoinColumn({ name: 'impact_areas_id' })
  @Transform(({ value }) => {
    return value.name;
  })
  @Expose({ name: 'ActionAreaName' })
  impact_area_name: ImpactArea;

  @Column()
  @Expose({ name: 'target' })
  global_target: string;
}
