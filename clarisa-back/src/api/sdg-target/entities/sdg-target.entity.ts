import { Expose, Transform } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { Sdg } from '../../sdg/entities/sdg.entity';

@Entity('sustainable_development_goal_targets')
export class SdgTarget extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column('varchar', { length: 5 })
  @Expose({ name: 'sdgTargetCode' })
  sdg_target_code: string;

  @Column()
  @Expose({ name: 'sdgTarget' })
  sdg_target: string;

  @ManyToOne(() => Sdg, { eager: true })
  @JoinColumn({ name: 'sdg_id' })
  @Transform(({ value }) => {
    return {
      usndCode: value.id,
      shortName: value.short_name,
      fullName: value.full_name,
      financialCode: value.financial_code,
    };
  })
  @Expose({ name: 'sdg' })
  sdg_object: Sdg;
}
