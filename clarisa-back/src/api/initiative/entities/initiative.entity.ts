import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { InitiativeStage } from './initiative-status.entity';

@Entity('submission_tool_initiatives')
export class Initiative extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  short_name: string;

  @Column()
  official_code: string;

  initiativeStages: InitiativeStage[];
}
