import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { DepthDescription } from '../../depth-description/entities/depth-description.entity';
import { ProjectedBenefit } from '../../projected-benefit/entities/projected-benefit.entity';

//FIXME change name to projected_benefit_depths
@Entity('projected_benefits_depths')
export class ProjectedBenefitDepth {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  //relations

  //FIXME change name to projected_benefit_id
  @Column({ type: 'bigint', nullable: true })
  projected_benefits_id: number;

  @Column({ type: 'bigint', nullable: true })
  depth_description_id: number;

  //object relations

  @ManyToOne(
    () => ProjectedBenefit,
    (pb) => pb.projected_benefit_weighting_array,
  )
  @JoinColumn({ name: 'projected_benefits_id' })
  projected_benefit_object: ProjectedBenefit;

  @ManyToOne(() => DepthDescription, (dd) => dd.projected_benefit_depth_array)
  @JoinColumn({ name: 'depth_description_id' })
  depth_description_object: DepthDescription;

  //auditable fields

  @Column(() => AuditableEntity, { prefix: '' })
  auditableFields: AuditableEntity;
}
