import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';

@Entity('sources')
export class Source extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: number;

  @Column()
  acronym: string;

  @Column()
  contact_point_id: string;
}
