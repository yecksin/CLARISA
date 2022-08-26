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

@Entity('projected_benefits_weight_description')
export class ProjectedBenefitWeightDescription extends AuditableEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;
}
