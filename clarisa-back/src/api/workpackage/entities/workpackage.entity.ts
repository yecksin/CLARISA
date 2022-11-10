import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { InitiativeStage } from '../../initiative/entities/initiative-status.entity';
import { WorkpackageCountry } from './workpackage-country.entity';
import { WorkpackageRegion } from './workpackage-region.entity';

@Entity('submission_tool_work_packages')
export class Workpackage extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  results: string;

  @Column()
  pathway_content: string;

  @Column({ type: 'tinyint' })
  is_global_dimension: boolean;

  @Column()
  submission_tool_initiative_stage_id: number;

  @Column()
  acronym: string;

  @Column()
  wp_official_code: number;

  initiative_stage: InitiativeStage;

  countries: WorkpackageCountry[];

  regions: WorkpackageRegion[];
}
