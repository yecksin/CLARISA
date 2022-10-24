import { Country } from 'src/api/country/entities/country.entity';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('submission_tool_work_package_countries')
export class WorkpackageCountry extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  work_package_id: number;

  @Column()
  country_id: number;

  country: Country;
}
