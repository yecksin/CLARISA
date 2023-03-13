import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { Region } from '../../region/entities/region.entity';
import { Country } from './country.entity';

@Entity('country_regions')
export class CountryRegion {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  //relations

  @Column({ type: 'bigint', nullable: false })
  country_id: number;

  @Column({ type: 'bigint', nullable: false })
  region_id: number;

  //object relations

  @ManyToOne(() => Country, (c) => c.country_region_array)
  @JoinColumn({ name: 'country_id' })
  country_object: Country;

  @ManyToOne(() => Region, (r) => r.country_region_array)
  @JoinColumn({ name: 'region_id' })
  region_object: Region;

  //auditable fields

  @Column(() => AuditableEntity, { prefix: '' })
  auditableFields: AuditableEntity;
}
