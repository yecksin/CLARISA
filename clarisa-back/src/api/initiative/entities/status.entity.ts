import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';

@Entity('submission_tool_stages')
export class Stage extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
