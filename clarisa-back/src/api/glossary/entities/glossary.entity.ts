import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';

@Entity('glossary')
export class Glossary extends AuditableEntity {
  @Exclude({ toPlainOnly: true })
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Exclude({ toPlainOnly: true })
  @Column()
  applicationName: string;

  @Column()
  @Expose({ name: 'term' })
  title: string;

  @Column()
  definition: string;

  @Exclude({ toPlainOnly: true })
  @Column({ type: 'tinyint' })
  show_in_dashboard: boolean;
}
