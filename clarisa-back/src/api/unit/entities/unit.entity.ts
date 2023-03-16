import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { ScienceGroup } from '../../science-group/entities/science-group.entity';
import { UnitType } from './unit-type.entity';

@Entity('units')
export class Unit {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: 20, nullable: false })
  financial_code: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  //relations

  @Column({ type: 'bigint', nullable: true })
  parent_id: number;

  @Column({ type: 'bigint', nullable: true })
  science_group_id: number;

  @Column({ type: 'bigint', nullable: true })
  unit_type_id: number;

  //object relations

  @ManyToOne(() => Unit, (u) => u.children)
  @JoinColumn({ name: 'parent_id' })
  parent: Unit;

  @OneToMany(() => Unit, (u) => u.parent)
  children: Unit[];

  @ManyToOne(() => ScienceGroup, (u) => u.units)
  @JoinColumn({ name: 'science_group_id' })
  science_group: ScienceGroup;

  @ManyToOne(() => UnitType, (u) => u.units)
  @JoinColumn({ name: 'unit_type_id' })
  unit_type: UnitType;

  //auditable fields

  @Exclude()
  @Column(() => AuditableEntity, { prefix: '' })
  auditableFields: AuditableEntity;
}
