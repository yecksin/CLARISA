import { Exclude, Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('global_unit_types')
export class CgiarEntityType {
    @PrimaryGeneratedColumn()
    @Expose({name:'code'})
    id: number;

    @Column()
    name: string;

    @Column()
    @Exclude()
    is_active: number;
}
