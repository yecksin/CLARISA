import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('outcome_indicators')
export class OutcomeIndicator extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  smo_code: string;

  @Column()
  outcome_indicator_statement: string;
}
