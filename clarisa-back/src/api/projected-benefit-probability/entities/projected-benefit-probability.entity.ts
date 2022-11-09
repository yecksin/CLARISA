import { Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';

@Entity('projected_benefits_probabilites')
export class ProjectedBenefitProbability extends AuditableEntity {
  @PrimaryGeneratedColumn()
  @Expose({ name: 'probabilityID' })
  id: number;

  @Column()
  @Expose({ name: 'probabilityName' })
  name: string;

  @Column()
  @Expose({ name: 'probabilityDescription' })
  description: string;
}
