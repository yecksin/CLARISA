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
import { PartnerRequest } from '../../partner-request/entities/partner-request.entity';

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

  @Column()
  parent_id: number;

  @OneToMany(() => Institution, (i) => i.institution_type_object)
  institutions: Promise<Institution[]>;

  @OneToMany(() => PartnerRequest, (pr) => pr.institution_type_object)
  partner_requests: PartnerRequest[];

  @OneToMany(() => InstitutionType, (it) => it.parent_object)
  children: InstitutionType[];

  @ManyToOne(() => InstitutionType, (it) => it.children)
  @JoinColumn({ name: 'parent_id' })
  parent_object: InstitutionType;
}
