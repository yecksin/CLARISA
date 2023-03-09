import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';

@Entity('bi_parameters')
export class BiParameter extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'text', nullable: true })
  parameter_name: string;

  @Column({ type: 'text', nullable: true })
  parameter_value: string;
}
