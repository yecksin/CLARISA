import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { Mis } from '../../mis/entities/mis.entity';
import { User } from './user.entity';

@Entity('user_mis')
export class UserMis {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'tinyint', width: 1, nullable: false, default: () => '0' })
  is_contact_point: boolean;

  //relations

  @Column({ type: 'bigint', nullable: false })
  user_id: number;

  @Column({ type: 'bigint', nullable: false })
  mis_id: number;

  //object relations

  @ManyToOne(() => User, (u) => u.user_mis_array)
  @JoinColumn({ name: 'user_id' })
  user_object: User;

  @ManyToOne(() => Mis, (m) => m.user_mis_array)
  @JoinColumn({ name: 'mis_id' })
  mis_object: Mis;

  //auditable fields

  @Exclude()
  @Column(() => AuditableEntity, { prefix: '' })
  auditableFields: AuditableEntity;
}
