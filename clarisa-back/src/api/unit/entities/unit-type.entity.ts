import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { Unit } from './unit.entity';

@Entity('unit_types')
export class UnitType extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: 20, nullable: false })
  acronym: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  //object relations

  @OneToMany(() => Unit, (u) => u.unit_type)
  units: Unit[];
}
