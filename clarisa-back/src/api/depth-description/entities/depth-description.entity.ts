import { Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';

@Entity('depths_description')
export class DepthDescription extends AuditableEntity {
  @PrimaryGeneratedColumn()
  @Expose({ name: 'depthScaleId' })
  id: number;

  @Column()
  @Expose({ name: 'depthScaleName' })
  name: string;
}
