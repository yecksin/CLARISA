import { Role } from 'src/api/role/entities/role.entity';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

@Entity('users')
export class User extends AuditableEntity {
  @PrimaryGeneratedColumn()
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

  @ManyToOne(() => User)
  @JoinColumn({name: 'created_by'})
  created_by_object: User;

  @Column({type: 'bigint'})
  created_by: number;

  @ManyToOne(() => User)
  @JoinColumn({name: 'modified_by'})
  modified_by_object: User;

  @Column({type: 'bigint'})
  modified_by: number;

  @Column()
  modification_justification: string;

  @Column()
  last_login: Date;

  @Column({ type: 'tinyint' })
  auto_save: boolean;

  @Column({ type: 'tinyint' })
  agree_terms: boolean;

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable()
  roles : Role[]
}
