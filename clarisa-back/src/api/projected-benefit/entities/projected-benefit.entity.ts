import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('projected-benefits')
export class ProjectedBenefit extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  impact_area_indicator_id: number;

  @Column()
  description: string;
}
