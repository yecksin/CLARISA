import { Exclude, Expose } from 'class-transformer';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('innovation_types')
export class InnovationType extends AuditableEntity {
  @PrimaryGeneratedColumn()
  @Expose({ name: 'code' })
  id: number;

  @Column()
  name: string;

  @Column()
  definition: string;

  @Column()
  source_id: number;
}
