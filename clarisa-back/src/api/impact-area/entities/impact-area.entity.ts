import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('impact_areas')
export class ImpactArea extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  financial_code: string;
}
