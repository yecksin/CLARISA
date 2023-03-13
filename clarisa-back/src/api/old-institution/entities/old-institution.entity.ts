import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { InstitutionType } from '../../institution-type/entities/institution-type.entity';
import { InstitutionLocation } from '../../institution/entities/institution-location.entity';

@Entity('old_institutions')
export class OldInstitution extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'text', nullable: true })
  acronym: string;

  @Column({ type: 'text', nullable: true })
  website_link: string;

  //relations

  @Column({ type: 'bigint', nullable: false })
  institution_type_id: number;

  @Column({ type: 'bigint', nullable: true })
  parent_id: number;

  //object relations

  institution_locations: InstitutionLocation[];

  institution_type_object: InstitutionType;
}
