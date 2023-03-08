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
export class ScienceGroup extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  financial_code: string;

  @Column()
  description: string;

  @Column()
  parent_id: number;

  @ManyToOne(() => ScienceGroup, (sc) => sc.children)
  @JoinColumn({ name: 'parent_id' })
  parent: Promise<ScienceGroup>;

  @OneToMany(() => ScienceGroup, (u) => u.parent)
  children: Promise<ScienceGroup[]>;

  @OneToMany(() => Unit, (u) => u.science_group)
  units: Promise<Unit[]>;
}
