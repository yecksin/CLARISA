import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { RolePermission } from '../../role/entities/role-permission.entity';

@Entity('permissions')
export class Permission extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'text', nullable: false })
  name: string;

  //object relations
  @OneToMany(() => RolePermission, (rp) => rp.permission_object)
  role_permission_array: RolePermission[];
}
