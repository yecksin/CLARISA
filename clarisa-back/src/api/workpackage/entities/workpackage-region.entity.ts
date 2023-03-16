import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { Region } from '../../region/entities/region.entity';
import { Workpackage } from './workpackage.entity';

@Entity('submission_tool_work_package_regions')
export class WorkpackageRegion {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  //relations

  @Column({ type: 'bigint', nullable: true })
  work_package_id: number;

  @Column({ type: 'bigint', nullable: true })
  region_id: number;

  //object relations

  @ManyToOne(() => Workpackage, (wp) => wp.regions)
  @JoinColumn({ name: 'work_package_id' })
  work_package_object: Workpackage;

  @ManyToOne(() => Region, (r) => r.work_package_region_array)
  @JoinColumn({ name: 'region_id' })
  region_object: Region;

  //auditable fields

  @Exclude()
  @Column(() => AuditableEntity, { prefix: '' })
  auditableFields: AuditableEntity;
}
