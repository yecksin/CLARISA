import { User } from 'src/api/user/entities/user.entity';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity('roles')
export class Role extends AuditableEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description : string;

    @Column()
    acronym : string;

    @Column()
    order : number;

    @Column()
    global_unit_id : number; //TODO to be reviewed

    @ManyToMany(() => User, (user) => user.roles)
    users : User[];
}
