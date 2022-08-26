import { Expose } from 'class-transformer';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('depths_description')
export class DepthDescription extends AuditableEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}
