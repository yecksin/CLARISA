import { Exclude } from "class-transformer";
import { AuditableEntity } from "src/shared/entities/extends/auditable-entity.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

  @Column()
  geoposition_id: number;
}
