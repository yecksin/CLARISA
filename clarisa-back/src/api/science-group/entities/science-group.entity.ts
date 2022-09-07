import { Unit } from 'src/api/unit/entities/unit.entity';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('science_groups')
export class ScienceGroup extends AuditableEntity {
  @PrimaryGeneratedColumn()
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
