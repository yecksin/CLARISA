import { Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';

@Entity('general_acronyms')
export class GeneralAcronym extends AuditableEntity {
  @PrimaryGeneratedColumn()
  @Expose({ name: 'code' })
  id: number;

  @Column()
  acronym: string;

  @Column()
  description: string;
}
