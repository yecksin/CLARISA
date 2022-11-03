import { CountryOfficeRequest } from 'src/api/country-office-request/entities/country-office-request.entity';
import { PartnerRequest } from 'src/api/partner-request/entities/partner-request.entity';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
