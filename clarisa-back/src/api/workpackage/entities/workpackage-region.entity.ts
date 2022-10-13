import { Region } from 'src/api/region/entities/region.entity';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
