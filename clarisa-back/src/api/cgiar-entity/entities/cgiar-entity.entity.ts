import { Exclude, Expose } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { CgiarEntityType } from '../../cgiar-entity-type/entities/cgiar-entity-type.entity';
import { Institution } from '../../institution/entities/institution.entity';

@Entity('global_units')
export class CgiarEntity {
  @Exclude()
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'text', nullable: false })
  acronym: string;

  @Expose({ name: 'code' })
  @Column({ type: 'text', nullable: true })
  smo_code: string;

  //relations

  @Column({ type: 'text', nullable: true })
  financial_code: string;

  @Expose({ name: 'institutionId' })
  @Column({ type: 'bigint', nullable: false })
  institution_id: number;

  @Exclude()
  @Column({ type: 'bigint', nullable: false })
  global_unit_type_id: number;

  //object relations

  @Expose({ name: 'cgiarEntityTypeDTO' })
  @ManyToOne(() => CgiarEntityType, (cet) => cet.cgiar_entity_array, {
    eager: true,
  })
  @JoinColumn({ name: 'global_unit_type_id' })
  cgiar_entity_type_object: CgiarEntityType;

  @Exclude()
  @ManyToOne(() => Institution, (i) => i.cgiar_entity_array)
  @JoinColumn({ name: 'institution_id' })
  institution_object: Institution;

  //auditable fields

  @Column(() => AuditableEntity, { prefix: '' })
  auditableFields: AuditableEntity;
}
