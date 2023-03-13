import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { Country } from '../../country/entities/country.entity';
import { Institution } from './institution.entity';

@Entity('institution_locations')
export class InstitutionLocation extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'tinyint', nullable: false })
  is_headquater: boolean;

  @Column({ type: 'text', nullable: true })
  city: string;

  //relations

  @Column({ type: 'bigint', nullable: false })
  institution_id: number;

  @Column({ type: 'bigint', nullable: false })
  country_id: number;

  //object relations

  @ManyToOne(() => Institution, (i) => i.institution_locations)
  @JoinColumn({ name: 'institution_id' })
  institution_object: Institution;

  @ManyToOne(() => Country, (c) => c.institution_locations)
  @JoinColumn({ name: 'country_id' })
  country_object: Country;
}
