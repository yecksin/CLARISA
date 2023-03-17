import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { Country } from '../../country/entities/country.entity';
import { Workpackage } from './workpackage.entity';

@Entity('submission_tool_work_package_countries')
export class WorkpackageCountry {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  //relations

  @Column({ type: 'bigint', nullable: true })
  work_package_id: number;

  @Column({ type: 'bigint', nullable: true })
  country_id: number;

  //object relations

  @ManyToOne(() => Workpackage, (wp) => wp.countries)
  @JoinColumn({ name: 'work_package_id' })
  work_package_object: Workpackage;

  @ManyToOne(() => Country, (c) => c.work_package_country_array)
  @JoinColumn({ name: 'country_id' })
  country_object: Country;

  //auditable fields

  @Exclude()
  @Column(() => AuditableEntity, { prefix: '' })
  auditableFields: AuditableEntity;
}
