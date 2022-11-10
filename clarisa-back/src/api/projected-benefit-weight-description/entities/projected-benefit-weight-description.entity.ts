import { Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';

@Entity('projected_benefits_weight_description')
export class ProjectedBenefitWeightDescription extends AuditableEntity {
  @PrimaryGeneratedColumn()
  @Expose({ name: 'descriptionID' })
  id: number;

  @Column()
  description: string;
}
