import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';

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
