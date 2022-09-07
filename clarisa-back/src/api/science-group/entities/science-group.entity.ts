import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('science_groups')
export class ScienceGroup extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  financial_code: string;

  @Column()
  description: string;

  @Column()
  parent_id: number;
}
