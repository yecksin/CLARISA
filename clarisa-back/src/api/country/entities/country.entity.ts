import { Exclude } from 'class-transformer';
import { Geoposition } from 'src/api/geoposition/entities/geoposition.entity';
import { Region } from 'src/api/region/entities/region.entity';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('countries')
export class Country extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  iso_alpha_2: string;

  @Column()
  iso_alpha_3: string;

  @Column()
  iso_numeric: number;

  @ManyToOne(() => Geoposition)
  @JoinColumn({ name: 'geoposition_id' })
  geoposition_object: Geoposition;

  @Column()
  geoposition_id: number;

  @ManyToMany(() => Region)
  @JoinTable({ name: 'country_regions' })
  regions: Region[];
}
