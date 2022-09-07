import { Expose } from 'class-transformer';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SdgTarget } from '../../sdg-target/entities/sdg-target.entity';

@Entity('sustainable_development_goal_indicators')
export class SdgIndicator extends AuditableEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Expose({name:'unsdIndicatorCode'})
    unsd_indicator_codes: string;

    @Column()
    @Expose({name:'indicatorCode'})
    sdg_indicator_codes: string;

    @Column()
    @Expose({name:'indicatorName'})
    sdg_indicator: string;

    @ManyToOne(() => SdgTarget, {eager:true})
    @JoinColumn({ name: 'sdg_target_id' })
    sdg_target_id: SdgTarget;
}
