import { Exclude, Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';

@Entity('geographic_scopes')
export class GeographicScope extends AuditableEntity {
  @Expose({ name: 'code' })
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Exclude()
  @Column()
  iati_name: string;

  @Column()
  definition: string;

  @Column()
  source_id: number;
}
