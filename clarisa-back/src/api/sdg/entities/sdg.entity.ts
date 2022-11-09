import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';

@Entity('sustainable_development_goals')
export class Sdg extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  smo_code: number;

  @Column()
  short_name: string;

  @Column()
  full_name: string;

  @Column()
  icon: string;

  @Column()
  description: string;

  @Column()
  financial_code: string;
}
