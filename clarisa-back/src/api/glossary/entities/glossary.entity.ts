import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';

@Entity('glossary')
export class Glossary extends AuditableEntity {
  @Exclude({ toPlainOnly: true })
  @PrimaryGeneratedColumn()
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
  @Column()
  active_since: Date;
}
