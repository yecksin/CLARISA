import { Exclude, Expose } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { SdgTarget } from '../../sdg-target/entities/sdg-target.entity';

@Entity('sustainable_development_goal_indicators')
export class SdgIndicator extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  //FIXME change name to unsd_indicator_code
  @Expose({ name: 'unsdIndicatorCode' })
  @Column({ type: 'text', nullable: false })
  unsd_indicator_codes: string;

  //FIXME change name to sdg_indicator_code
  @Expose({ name: 'indicatorCode' })
  @Column({ type: 'text', nullable: false })
  sdg_indicator_codes: string;

  @Expose({ name: 'indicatorName' })
  @Column({ type: 'text', nullable: false })
  sdg_indicator: string;

  //relations

  @Exclude()
  @Column({ type: 'bigint', nullable: true })
  sdg_target_id: number;

  //object relations

  @Expose({ name: 'sdg_target_id' })
  @ManyToOne(() => SdgTarget, (sdgt) => sdgt.sdg_indicator_array, {
    eager: true,
  })
  @JoinColumn({ name: 'sdg_target_id' })
  sdg_target_object: SdgTarget;
}
