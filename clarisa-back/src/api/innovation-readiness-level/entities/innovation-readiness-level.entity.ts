import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';

@Entity('innovation_readiness_levels')
export class InnovationReadinessLevel extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  level: number;

  @Column()
  name: string;

  @Column()
  definition: string;

  @Column()
  source_id: number;
}
