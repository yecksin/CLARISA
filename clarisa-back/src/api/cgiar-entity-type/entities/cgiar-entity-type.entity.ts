import { Expose } from 'class-transformer';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('global_unit_types')
export class CgiarEntityType extends AuditableEntity {
  @PrimaryGeneratedColumn()
  @Expose({ name: 'code' })
  id: number;

  @Column()
  name: string;
}
