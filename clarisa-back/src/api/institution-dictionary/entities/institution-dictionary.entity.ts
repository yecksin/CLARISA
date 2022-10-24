import { Institution } from 'src/api/institution/entities/institution.entity';
import { Source } from 'src/api/sources/entities/source.entity';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('institution_dictionary')
export class InstitutionDictionary extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  institution_id: number;

  @Column()
  source_id: number;

  @Column()
  institution_source_id: string;

  @Column()
  institution_source_name: string;

  @ManyToOne(() => Institution, (i) => i.institution_dictionary_entries)
  @JoinColumn({ name: 'institution_id' })
  institution_object: Institution;

  @ManyToOne(() => Source, (s) => s.institution_dictionary_entries)
  @JoinColumn({ name: 'source_id' })
  source_object: Source;
}
