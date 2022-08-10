import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

@Entity('global_targets')
export class GlobalTarget extends AuditableEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    impact_areas_id : number;

    @Column()
    global_target: string;

}
