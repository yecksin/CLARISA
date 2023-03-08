import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { UserRole } from '../../user/entities/user-role.entity';
import { User } from '../../user/entities/user.entity';

@Entity('roles')
export class Role extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  description: string;

  @Column()
  acronym: string;

  @Column()
  order: number;

  @Column()
  mis_id: number;

  @OneToMany(() => UserRole, (ur) => ur.role)
  userRoles: UserRole[];
}
