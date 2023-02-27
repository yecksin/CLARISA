import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { InstitutionDictionary } from '../../institution-dictionary/entities/institution-dictionary.entity';
import { InstitutionType } from '../../institution-type/entities/institution-type.entity';
import { InstitutionLocation } from '../../institution/entities/institution-location.entity';

@Entity('old_institutions')
export class OldInstitution extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  acronym: string;

  @Column()
  website_link: string;

  @Column()
  institution_type_id: number;

  @Column()
  parent_id: number;

  @OneToMany(() => InstitutionLocation, (il) => il.old_institution_object)
  institution_locations: InstitutionLocation[];

  @ManyToOne(() => InstitutionType, (it) => it.old_institutions)
  @JoinColumn({ name: 'institution_type_id' })
  institution_type_object: InstitutionType;
}
