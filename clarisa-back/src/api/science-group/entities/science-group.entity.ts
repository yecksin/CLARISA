import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { Unit } from '../../unit/entities/unit.entity';

@Entity('science_groups')
export class ScienceGroup {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: 10, nullable: false })
  financial_code: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  // relations

  @Column({ type: 'bigint', nullable: true })
  parent_id: number;

  //object relations

  @ManyToOne(() => ScienceGroup, (sc) => sc.children)
  @JoinColumn({ name: 'parent_id' })
  parent: ScienceGroup;

  @OneToMany(() => ScienceGroup, (u) => u.parent)
  children: ScienceGroup[];

  @OneToMany(() => Unit, (u) => u.science_group)
  units: Unit[];

  //auditable fields

  @Column(() => AuditableEntity, { prefix: '' })
  auditableFields: AuditableEntity;
}
