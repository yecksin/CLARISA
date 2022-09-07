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

@Entity('projected_benefits_weighting')
export class ProjectedBenefitWeighting extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  projected_benefits_id: number;

  @Column()
  weight_description_id: number;

  @Column()
  weight_value: string;
}
