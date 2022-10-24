import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('innovation_characteristics')
export class InnovationCharacteristic extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  definition: string;

  @Column()
  source_id: string;
}
