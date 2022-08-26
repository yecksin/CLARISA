import { Country } from 'src/api/country/entities/country.entity';
import { RegionType } from 'src/api/region-type/entities/region-type.entity';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
  @ManyToOne(() => Region, parent => parent.children)
  @JoinColumn({name: 'parent_id'})
  parent_object: Promise<Region>;

  @OneToMany(() => Region, child => child.parent_object)
  children: Promise<Region[]>
  
  @ManyToMany(() => Country, country => country.regions)
  countries: Promise<Country[]>;

  @ManyToOne(() => RegionType)
  @JoinColumn({name: 'region_type_id'})
  region_type_object: Promise<RegionType>;
}
