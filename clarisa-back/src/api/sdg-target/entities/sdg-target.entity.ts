import { Exclude, Expose, Transform } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { SdgIndicator } from '../../sdg-indicator/entities/sdg-indicator.entity';
import { Sdg } from '../../sdg/entities/sdg.entity';

@Entity('sustainable_development_goal_targets')
export class SdgTarget {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Expose({ name: 'sdgTargetCode' })
  @Column({ type: 'varchar', length: 5, nullable: false })
  sdg_target_code: string;

  @Expose({ name: 'sdgTarget' })
  @Column({ type: 'text', nullable: true })
  sdg_target: string;

  //relations

  @Exclude()
  @Column({ type: 'bigint', nullable: false })
  sdg_id: number;

  //object relations

  @Expose({ name: 'sdg' })
  @Transform(({ value }) => {
    return {
      usndCode: value.id,
      shortName: value.short_name,
      fullName: value.full_name,
      financialCode: value.financial_code,
    };
  })
  @ManyToOne(() => Sdg, (sdg) => sdg.sdg_target_array, { eager: true })
  @JoinColumn({ name: 'sdg_id' })
  sdg_object: Sdg;

  //object relations

  @OneToMany(() => SdgIndicator, (sdgi) => sdgi.sdg_target_object)
  sdg_indicator_array: SdgIndicator[];

  //auditable fields

  @Exclude()
  @Column(() => AuditableEntity, { prefix: '' })
  auditableFields: AuditableEntity;
}
