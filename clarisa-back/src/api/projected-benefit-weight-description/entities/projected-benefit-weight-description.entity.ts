import { Expose } from 'class-transformer';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { ProjectedBenefitWeighting } from '../../projected-benefit-weighting/entities/projected-benefit-weighting.entity';

@Entity('projected_benefits_weight_description')
export class ProjectedBenefitWeightDescription extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  @Expose({ name: 'descriptionID' })
  id: number;

  @Column()
  description: string;

  //relations
  @OneToMany(
    () => ProjectedBenefitWeighting,
    (pbw) => pbw.weight_description_object,
  )
  projected_benefit_weighting_array: ProjectedBenefitWeighting[];
}
