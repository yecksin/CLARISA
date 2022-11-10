import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { Unit } from './unit.entity';

@Entity('unit_types')
export class UnitType extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  acronym: string;

  @Column()
  description: string;

  @OneToMany(() => Unit, (u) => u.unit_type)
  units: Promise<Unit[]>;
}
