import { Sdg } from 'src/api/sdg/entities/sdg.entity';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity';
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
  sdg_target_code: string;

  @Column()
  sdg_target: string;

  @Column()
  sdg_id: number;

  @ManyToOne(() => Sdg)
  @JoinColumn({ name: 'sdg_id' })
  sdg_object: Sdg;
}
