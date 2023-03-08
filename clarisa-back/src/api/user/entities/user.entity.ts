import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { Role } from '../../role/entities/role.entity';
import { UserRole } from './user-role.entity';

@Entity('users')
export class User extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'tinyint' })
  is_cgiar_user: boolean;

  @Column()
  last_login: Date;

  @Column({ type: 'tinyint' })
  agree_terms: boolean;

  @OneToMany(() => UserRole, (ur) => ur.user)
  userRoles: UserRole[];

  //meant to be used by the guard
  permissions: string[];
}
