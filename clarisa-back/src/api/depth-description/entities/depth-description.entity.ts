import { Expose } from 'class-transformer';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { ProjectedBenefitDepth } from '../../projected-benefit-depth/entities/projected-benefit-depth.entity';

@Entity('depths_description')
export class DepthDescription extends AuditableEntity {
  @PrimaryGeneratedColumn()
  @Expose({ name: 'depthScaleId' })
  id: number;

  @Column()
  @Expose({ name: 'depthScaleName' })
  name: string;

  //relations
  @OneToMany(() => ProjectedBenefitDepth, (pbd) => pbd.depth_description_object)
  projected_benefit_depth_array: ProjectedBenefitDepth[];
}
