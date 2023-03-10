import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { Permission } from '../../permission/entities/permission.entity';
import { Role } from './role.entity';

@Entity('role_permission')
export class RolePermission extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  //relations

  @Column({ type: 'bigint', nullable: false })
  role_id: number;

  @Column({ type: 'bigint', nullable: false })
  permission_id: number;

  //object relations

  @ManyToOne(() => Role, (r) => r.role_permission_array)
  @JoinColumn({ name: 'role_id' })
  role_object: Role;

  @ManyToOne(() => Permission, (p) => p.role_permission_array)
  @JoinColumn({ name: 'permission_id' })
  permission_object: Permission;
}
