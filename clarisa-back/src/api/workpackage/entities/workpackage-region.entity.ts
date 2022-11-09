import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { Region } from '../../region/entities/region.entity';

@Entity('submission_tool_work_package_regions')
export class WorkpackageRegion extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  work_package_id: number;

  @Column()
  region_id: number;

  region: Region;
}
