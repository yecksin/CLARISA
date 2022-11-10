import { Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';

@Entity('global_unit_types')
export class CgiarEntityType extends AuditableEntity {
  @PrimaryGeneratedColumn()
  @Expose({ name: 'code' })
  id: number;

  @Column()
  name: string;
}
