import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('projected_benefits_depths')
export class ProjectedBenefitDepth extends AuditableEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    projected_benefits_id: number;

    @Column()
    depth_description_id: number;
}
