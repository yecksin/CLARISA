import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { Country } from '../../country/entities/country.entity';
import { RegionType } from '../../region-type/entities/region-type.entity';

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

  @Column()
  region_type_id: number;

  @Column()
  parent_id: number;

  //relations
  @ManyToOne(() => Region, (parent) => parent.children)
  @JoinColumn({ name: 'parent_id' })
  parent_object: Region;

  @OneToMany(() => Region, (child) => child.parent_object)
  children: Region[];

  @ManyToMany(() => Country, (country) => country.regions)
  countries: Country[];

  @ManyToOne(() => RegionType, (rt) => rt.regions)
  @JoinColumn({ name: 'region_type_id' })
  region_type_object: RegionType;
}
