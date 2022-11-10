import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { Country } from '../../country/entities/country.entity';
import { Institution } from '../../institution/entities/institution.entity';
import { Mis } from '../../mis/entities/mis.entity';

@Entity('country_office_requests')
export class CountryOfficeRequest extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  institution_id: number;

  @Column()
  country_id: number;

  @Column()
  request_source: string;

  @Column()
  mis_id: number;

  @Column()
  accepted_by: number;

  @Column()
  accepted_date: Date;

  @Column()
  rejected_by: number;

  @Column()
  rejected_date: Date;

  @Column()
  reject_justification: string;

  @Column()
  external_user_mail: string;

  @Column()
  external_user_name: string;

  @Column()
  external_user_comments: string;

  //relations
  @ManyToOne(() => Country, (c) => c.partner_requests)
  @JoinColumn({ name: 'country_id' })
  country_object: Country;

  @ManyToOne(() => Institution, (i) => i.partner_requests)
  @JoinColumn({ name: 'institution_id' })
  institution_object: Institution;

  @ManyToOne(() => Mis, (m) => m.partner_requests)
  @JoinColumn({ name: 'mis_id' })
  mis_object: Mis;
}
