import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { CountryOfficeRequest } from '../../country-office-request/entities/country-office-request.entity';
import { PartnerRequest } from '../../partner-request/entities/partner-request.entity';

@Entity('mises')
export class Mis extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: number;

  @Column()
  acronym: string;

  @Column()
  contact_point_id: string;

  @OneToMany(() => PartnerRequest, (pr) => pr.institution_type_object)
  partner_requests: PartnerRequest[];

  @OneToMany(() => CountryOfficeRequest, (cof) => cof.mis_object)
  country_office_requests: CountryOfficeRequest[];
}
