import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
 import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';

@Entity('glossary')
export class Glossary extends AuditableEntity{
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
}
