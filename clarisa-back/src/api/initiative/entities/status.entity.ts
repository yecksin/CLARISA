import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('submission_tool_stages')
export class Stage extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
