import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ImpactArea } from '../../impact-area/entities/impact-area.entity';

@Entity('impact_areas_indicators')
export class ImpactAreaIndicator extends AuditableEntity {
  @Type(() => Number)
  @PrimaryGeneratedColumn()
  @Expose({ name: 'indicatorId' })
  id: number;

  @Column()
  @Expose({ name: 'indicatorStatement' })
  indicator_statement: string;

  @ManyToOne(() => ImpactArea, { eager: true })
  @JoinColumn({ name: 'impact_areas_id' })
  @Transform(({ value }) => {
    return value.id;
  })
  @Expose({ name: 'impactAreaId' })
  impact_areas_id: ImpactArea;

  @ManyToOne(() => ImpactArea, { eager: true })
  @JoinColumn({ name: 'impact_areas_id' })
  @Transform(({ value }) => {
    return value.name;
  })
  @Expose({ name: 'impactAreaName' })
  impact_areas_name: ImpactArea;

  @Column()
  @Expose({ name: 'targetYear' })
  target_year: number;

  @Column()
  @Expose({ name: 'targetUnit' })
  target_unit: string;

  @Column()
  @Expose({ name: 'value' })
  target_value: string;

  @Column({ type: 'tinyint' })
  @Transform(({ value }) => {
    if (value == 1) {
      return true;
    }

    return false;
  })
  @Expose({ name: 'isAplicableProjectedBenefits' })
  is_aplicable_projected_benefits: boolean;

  @Column()
  @Exclude()
  smo_code: string;
}
