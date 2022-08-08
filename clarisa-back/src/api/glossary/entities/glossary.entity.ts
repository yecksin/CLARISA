import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('glossary')
export class Glossary {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    applicationName : string;

    @Column()
    title : string;

    @Column()
    definition: string;

    @Column()
    active_since : Date;
    
    @Column({ type: 'tinyint' })
    is_active : boolean;
}
