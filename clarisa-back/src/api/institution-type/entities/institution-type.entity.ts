import { Expose } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { Institution } from '../../institution/entities/institution.entity';
import { OldInstitution } from '../../old-institution/entities/old-institution.entity';
import { PartnerRequest } from '../../partner-request/entities/partner-request.entity';

@Entity('institution_types')
export class InstitutionType extends AuditableEntity {
  @Expose({ name: 'code' })
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column()
  acronym: string;

  @Column()
  description: string;

  @Column()
  source_id: number;

  @Column()
  parent_id: number;

  @OneToMany(() => Institution, (i) => i.institution_type_object)
  institutions: Promise<Institution[]>;

  @OneToMany(() => OldInstitution, (oi) => oi.institution_type_object)
  old_institutions: Promise<OldInstitution[]>;

  @OneToMany(() => PartnerRequest, (pr) => pr.institution_type_object)
  partner_requests: PartnerRequest[];

  @OneToMany(() => InstitutionType, (it) => it.parent_object)
  children: InstitutionType[];

  @ManyToOne(() => InstitutionType, (it) => it.children)
  @JoinColumn({ name: 'parent_id' })
  parent_object: InstitutionType;
}
