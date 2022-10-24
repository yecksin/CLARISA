import { Geoposition } from 'src/api/geoposition/entities/geoposition.entity';
import { InstitutionLocation } from 'src/api/institution/entities/institution-location.entity';
import { Region } from 'src/api/region/entities/region.entity';
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
  geoposition_object: Promise<Geoposition>;

  @Column()
  geoposition_id: number;

  @ManyToMany(() => Region, (region) => region.countries)
  @JoinTable({
    name: 'country_regions',
    joinColumn: {
      name: 'country_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'region_id',
      referencedColumnName: 'id',
    },
  })
  regions: Promise<Region[]>;

  @OneToMany(() => InstitutionLocation, (il) => il.country_object)
  institution_locations: Promise<InstitutionLocation[]>;
}
