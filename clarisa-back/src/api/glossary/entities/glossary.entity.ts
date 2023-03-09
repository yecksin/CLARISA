import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';

@Entity('glossary')
export class Glossary extends AuditableEntity {
  @Exclude({ toPlainOnly: true })
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Exclude({ toPlainOnly: true })
  @Column({ type: 'varchar', length: 100, nullable: true })
  applicationName: string;

  @Expose({ name: 'term' })
  @Column({ type: 'text', nullable: false })
  title: string;

  @Column({ type: 'text', nullable: false })
  definition: string;

  @Exclude({ toPlainOnly: true })
  @Column({ type: 'tinyint', nullable: false, default: () => '0' })
  show_in_dashboard: boolean;
}
