import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

    @Column()
    global_unit_type_id: string;

    @Column()
    is_active: number;
}
