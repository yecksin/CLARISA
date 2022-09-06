import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CgiarEntityType } from '../../cgiar-entity-type/entities/cgiar-entity-type.entity';

@Entity('global_units')
export class CgiarEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    smo_code: string;

    @Column()
    name: string;

    @Column()
    acronym: string;

    @Column()
    financial_code: string;

    @ManyToOne(() => CgiarEntityType, {eager:true})
    @JoinColumn({ name: 'global_unit_type_id' })
    cgiarEntityTypeDTO: CgiarEntityType;

    @Column()
    is_active: number;
}
