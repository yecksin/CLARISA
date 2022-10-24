import { Region } from 'src/api/region/entities/region.entity';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('region_types')
export class RegionType extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Region, (r) => r.region_type_object)
  regions: Region[];
}
