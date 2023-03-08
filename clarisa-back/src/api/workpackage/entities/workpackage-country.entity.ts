import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { Country } from '../../country/entities/country.entity';

@Entity('submission_tool_work_package_countries')
export class WorkpackageCountry extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  work_package_id: number;

  @Column()
  country_id: number;

  country: Country;
}
