import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { Mis } from '../../mis/entities/mis.entity';
import { UserRole } from '../../user/entities/user-role.entity';
import { User } from '../../user/entities/user.entity';
import { RolePermission } from './role-permission.entity';

@Entity('roles')
export class Role extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  acronym: string;

  @Column({ type: 'int', nullable: false })
  order: number;

  //object relations

  @OneToMany(() => UserRole, (ur) => ur.role)
  userRoles: UserRole[];

  @OneToMany(() => RolePermission, (rp) => rp.role_object)
  role_permission_array: RolePermission[];
}
