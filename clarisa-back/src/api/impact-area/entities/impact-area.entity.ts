import { Expose } from 'class-transformer';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { ImpactAreaIndicator } from '../../impact-area-indicator/entities/impact-area-indicator.entity';

@Entity('impact_areas')
export class ImpactArea extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  @Expose({ name: 'financialCode' })
  financial_code: string;

  //relations
  @OneToMany(() => ImpactAreaIndicator, (iai) => iai.impact_area_object)
  impact_area_indicators: ImpactAreaIndicator[];
}
