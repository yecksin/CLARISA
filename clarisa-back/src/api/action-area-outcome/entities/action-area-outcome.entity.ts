import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('action_area_outcomes')
export class ActionAreaOutcome extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  smo_code: string;
  
  @Column()
  outcome_statement: string;
}
