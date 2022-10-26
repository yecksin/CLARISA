import { Expose } from 'class-transformer';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('depths_description')
export class DepthDescription extends AuditableEntity {
  @PrimaryGeneratedColumn()
  @Expose({ name: 'depthScaleId' })
  id: number;

  @Column()
  @Expose({ name: 'depthScaleName' })
  name: string;
}
