import { Country } from 'src/api/country/entities/country.entity';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Institution } from './institution.entity';

@Entity('institution_locations')
export class InstitutionLocation extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  institution_id: number;

  @Column()
  country_id: number;

  @Column()
  is_headquater: boolean;

  @Column()
  city: string;

  @ManyToOne(() => Institution, (i) => i.institution_locations)
  @JoinColumn({ name: 'institution_id' })
  institution_object: Institution;

  @ManyToOne(() => Country, (c) => c.institution_locations)
  @JoinColumn({ name: 'country_id' })
  country_object: Country;
}
