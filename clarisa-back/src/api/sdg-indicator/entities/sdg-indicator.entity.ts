import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sustainable_development_goal_indicators')
export class SdgIndicator extends AuditableEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    unsd_indicator_codes: string;

    @Column()
    sdg_indicator_codes: string;

    @Column()
    sdg_indicator: string;

    @Column()
    sdg_target_id: number;
}
