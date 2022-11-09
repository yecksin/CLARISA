import { User } from 'src/api/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';

@Entity('roles')
export class Role extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  acronym: string;

  @Column()
  order: number;

  @Column()
  mis_id: number;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
}
