import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { Institution } from '../../institution/entities/institution.entity';
import { Source } from '../../source/entities/source.entity';

@Entity('institution_dictionary')
export class InstitutionDictionary {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'text', nullable: true })
  institution_source_id: string;

  @Column({ type: 'text', nullable: true })
  institution_source_name: string;

  //relations

  @Column({ type: 'bigint', nullable: false })
  institution_id: number;

  @Column({ type: 'bigint', nullable: false })
  source_id: number;

  //object relations

  @ManyToOne(() => Institution, (i) => i.institution_dictionary_entries)
  @JoinColumn({ name: 'institution_id' })
  institution_object: Institution;

  @ManyToOne(() => Source, (s) => s.institution_dictionary_entries)
  @JoinColumn({ name: 'source_id' })
  source_object: Source;

  //auditable fields

  @Exclude()
  @Column(() => AuditableEntity, { prefix: '' })
  auditableFields: AuditableEntity;
}
