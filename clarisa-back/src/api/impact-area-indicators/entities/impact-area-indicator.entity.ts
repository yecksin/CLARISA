 import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ImpactArea } from '../../impact-area/entities/impact-area.entity';

@Entity('impact_areas_indicators')
export class ImpactAreaIndicator extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  indicator_statement: string;

  @OneToMany(() => ImpactArea, (impactArea) => impactArea.impact_area_indicators)
  @JoinColumn({name: 'impact_areas_id', referencedColumnName: 'id'})
  impact_areas: ImpactArea;

  @Column()
  target_year: number;

  @Column()
  target_unit: string;

  @Column()
  is_aplicable_projected_benefits: number;

  @Column()
  smo_code: string;
}
