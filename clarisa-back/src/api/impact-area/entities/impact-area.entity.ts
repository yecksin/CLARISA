import { Expose } from 'class-transformer';
import { ImpactAreaIndicator } from 'src/api/impact-area-indicators/entities/impact-area-indicator.entity';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('impact_areas')
export class ImpactArea extends AuditableEntity {
  @PrimaryGeneratedColumn()
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
