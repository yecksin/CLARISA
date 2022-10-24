import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('mises')
export class Mis extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: number;

  @Column()
  acronym: string;

  @Column()
  contact_point_id: string;
}
