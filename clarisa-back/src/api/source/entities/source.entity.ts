import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { InstitutionDictionary } from '../../institution-dictionary/entities/institution-dictionary.entity';

@Entity('sources')
export class Source extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column()
  acronym: string;

  @Column()
  contact_point_id: string;

  @OneToMany(() => InstitutionDictionary, (id) => id.source_object)
  institution_dictionary_entries: InstitutionDictionary[];
}
