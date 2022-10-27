import { Institution } from 'src/api/institution/entities/institution.entity';
import { PartnerRequest } from 'src/api/partner-request/entities/partner-request.entity';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('institution_types')
export class InstitutionType extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  acronym: string;

  @Column()
  description: string;

  @Column()
  source_id: number;

  @OneToMany(() => Institution, (i) => i.institution_type_object)
  institutions: Promise<Institution[]>;

  @OneToMany(() => PartnerRequest, (pr) => pr.institution_type_object)
  partner_requests: PartnerRequest[];
}
