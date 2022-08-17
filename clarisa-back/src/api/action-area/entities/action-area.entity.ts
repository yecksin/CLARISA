import { Exclude } from "class-transformer";
import { AuditableEntity } from "src/shared/entities/extends/auditable-entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('action_areas')
export class ActionArea extends AuditableEntity{
    @PrimaryGeneratedColumn()
    id: number;

    
    @Column( {select : false})
    smo_code : string;

    @Column()
    name : string;

    @Column()
    description : string;
}
