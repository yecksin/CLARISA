import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { Country } from '../../country/entities/country.entity';
import { OldInstitution } from '../../old-institution/entities/old-institution.entity';
import { Institution } from './institution.entity';

@Entity('institution_locations')
export class InstitutionLocation extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
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

  @ManyToOne(() => OldInstitution, (oi) => oi.institution_locations)
  @JoinColumn({ name: 'institution_id' })
  old_institution_object: OldInstitution;

  @ManyToOne(() => Country, (c) => c.institution_locations)
  @JoinColumn({ name: 'country_id' })
  country_object: Country;
}
