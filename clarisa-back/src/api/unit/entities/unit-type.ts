import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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
