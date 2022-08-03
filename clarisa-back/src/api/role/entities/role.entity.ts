import { User } from 'src/api/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity('roles')
export class Role {
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

    @Column({ type: 'tinyint' })
    is_active: boolean;

    @ManyToMany(() => User, (user) => user.roles)
    users : User[];
}
