import { RegionType } from 'src/api/region-type/entities/region-type.entity';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('regions')
export class Region extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  iso_numeric: number;

  @Column()
  name: string;

  @Column()
  acronym: string;

  @ManyToOne(() => RegionType)
  @JoinColumn({name: 'region_type_id'})
  region_type_object: RegionType;

  @Column()
  region_type_id: number;

  @ManyToOne(() => Region)
  @JoinColumn({name: 'parent_id'})
  parent_object: Region;

  @Column()
  parent_id: number;
}
