import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { Country } from '../../country/entities/country.entity';
import { InstitutionType } from '../../institution-type/entities/institution-type.entity';
import { Institution } from '../../institution/entities/institution.entity';
import { Mis } from '../../mis/entities/mis.entity';

@Entity('partner_requests')
export class PartnerRequest extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  partner_name: string;

  @Column()
  acronym: string;

  @Column()
  institution_type_id: number;

  @Column()
  country_id: number;

  @Column()
  web_page: string;

  @Column()
  is_office: boolean;

  @Column()
  institution_id: number;

  @Column()
  request_source: string;

  @Column()
  mis_id: number;

  @Column()
  partner_request_id: number;

  @Column()
  is_modified: boolean;

  @Column()
  accepted: boolean;

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
  @ManyToOne(() => InstitutionType, (it) => it.partner_requests)
  @JoinColumn({ name: 'institution_type_id' })
  institution_type_object: InstitutionType;

  @ManyToOne(() => Country, (c) => c.partner_requests)
  @JoinColumn({ name: 'country_id' })
  country_object: Country;

  @ManyToOne(() => Institution, (i) => i.partner_requests)
  @JoinColumn({ name: 'institution_id' })
  institution_object: Institution;

  @ManyToOne(() => Mis, (m) => m.partner_requests)
  @JoinColumn({ name: 'mis_id' })
  mis_object: Mis;

  @ManyToOne(() => PartnerRequest, (pr) => pr.children)
  @JoinColumn({ name: 'partner_request_id' })
  parent_object: PartnerRequest;

  //in theory it should be ONLY one, but you'll never know...
  @OneToMany(() => PartnerRequest, (pr) => pr.parent_object)
  children: PartnerRequest[];
}
