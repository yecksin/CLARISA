import { Expose } from 'class-transformer';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
