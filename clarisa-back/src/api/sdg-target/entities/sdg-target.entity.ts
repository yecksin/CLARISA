import { Expose, Transform } from 'class-transformer';
import { Sdg } from 'src/api/sdg/entities/sdg.entity';
 import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('sustainable_development_goal_targets')
export class SdgTarget extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 5 })
  @Expose({name:'sdgTargetCode'})
  sdg_target_code: string;

  @Column()
  @Expose({name:'sdgTarget'})
  sdg_target: string;


  @ManyToOne(() => Sdg, {eager:true})
  @JoinColumn({ name: 'sdg_id' })
  @Transform(({value}) => {
    return {
      usndCode : value.id,
      shortName: value.short_name,
      fullName: value.full_name,
      financialCode: value.financial_code
    }
  })
  @Expose({name:'sdg'})
  sdg_object: Sdg;
}
