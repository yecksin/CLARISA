import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('projected_benefits_probabilites')
export class ProjectedBenefitProbability extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;
}
