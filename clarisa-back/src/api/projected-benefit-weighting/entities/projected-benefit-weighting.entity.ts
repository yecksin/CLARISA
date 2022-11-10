import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { ProjectedBenefitWeightDescription } from '../../projected-benefit-weight-description/entities/projected-benefit-weight-description.entity';
import { ProjectedBenefit } from '../../projected-benefit/entities/projected-benefit.entity';

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

  //relations
  @ManyToOne(
    () => ProjectedBenefit,
    (pb) => pb.projected_benefit_weighting_array,
  )
  @JoinColumn({ name: 'projected_benefits_id' })
  projected_benefit_object: ProjectedBenefit;

  @ManyToOne(
    () => ProjectedBenefitWeightDescription,
    (pbwd) => pbwd.projected_benefit_weighting_array,
  )
  @JoinColumn({ name: 'weight_description_id' })
  weight_description_object: ProjectedBenefitWeightDescription;
}
