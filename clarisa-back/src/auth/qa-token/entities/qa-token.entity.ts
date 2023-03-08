import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableDto } from '../../../shared/entities/dtos/auditable-dto';

@Entity('qa_token_auth')
export class QaToken {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;
  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  mis_acronym: string;

  @Column()
  app_user: string;

  @Column()
  official_code: string;

  @Column()
  token: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @Column()
  expiration_date: Date;
}
