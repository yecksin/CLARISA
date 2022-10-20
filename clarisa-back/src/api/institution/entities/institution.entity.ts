import { InstitutionDictionary } from 'src/api/institution-dictionary/entities/institution-dictionary.entity';
import { InstitutionType } from 'src/api/institution-type/entities/institution-type.entity';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { InstitutionLocation } from './institution-location.entity';

@Entity('institutions')
export class Institution extends AuditableEntity {
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

  @OneToMany(() => InstitutionLocation, (il) => il.institution_object)
  institution_locations: InstitutionLocation[];

  @ManyToOne(() => InstitutionType, (it) => it.institutions)
  @JoinColumn({ name: 'institution_type_id' })
  institution_type_object: InstitutionType;

  @OneToMany(() => InstitutionDictionary, (id) => id.institution_object)
  institution_dictionary_entries: InstitutionDictionary[];
}
