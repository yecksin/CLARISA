import { Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';

@Entity('projected_benefits_probabilites')
export class ProjectedBenefitProbability {
  @Expose({ name: 'probabilityID' })
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Expose({ name: 'probabilityName' })
  @Column({ type: 'text', nullable: true })
  name: string;

  @Expose({ name: 'probabilityDescription' })
  @Column({ type: 'text', nullable: true })
  description: string;

  //auditable fields

  @Column(() => AuditableEntity, { prefix: '' })
  auditableFields: AuditableEntity;
}
