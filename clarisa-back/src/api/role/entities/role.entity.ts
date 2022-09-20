import { User } from 'src/api/user/entities/user.entity';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

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
  source_id: number;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
}
