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

@Entity('global_units')
export class CgiarEntity extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  @Exclude()
  id: number;

  @Column()
  name: string;

  @Column()
  acronym: string;

  @Column()
  @Expose({ name: 'code' })
  smo_code: string;

  @Column()
  @Expose({ name: 'institutionId' })
  institution_id: number;

  @Column()
  financial_code: string;

  @Exclude()
  @Column()
  global_unit_type_id: number;

  @Expose({ name: 'cgiarEntityTypeDTO' })
  @ManyToOne(() => CgiarEntityType, { eager: true })
  @JoinColumn({ name: 'global_unit_type_id' })
  cgiarEntityType: CgiarEntityType;
}
