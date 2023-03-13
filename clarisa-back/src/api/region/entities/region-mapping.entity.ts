import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { Region } from './region.entity';

@Entity('region_mappings')
export class RegionMapping {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  //relations

  @Column({ type: 'bigint', nullable: false })
  source_region_id: number;

  @Column({ type: 'bigint', nullable: false })
  target_region_id: number;

  //object relations

  @ManyToOne(() => Region, (r) => r.source_region_array)
  @JoinColumn({ name: 'source_region_id' })
  source_region_object: Region;

  @ManyToOne(() => Region, (r) => r.target_region_array)
  @JoinColumn({ name: 'target_region_id' })
  target_region_object: Region;

  //auditable fields

  @Column(() => AuditableEntity, { prefix: '' })
  auditableFields: AuditableEntity;
}
