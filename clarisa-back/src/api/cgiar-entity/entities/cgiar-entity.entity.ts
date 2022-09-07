import { Exclude, Expose } from 'class-transformer';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CgiarEntityType } from '../../cgiar-entity-type/entities/cgiar-entity-type.entity';

@Entity('global_units')
export class CgiarEntity extends AuditableEntity {
  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @Column()
  name: string;

  @Column()
  acronym: string;

  @Column()
  @Expose({ name: 'code' })
  smo_code: string;

  @Column()
  financial_code: string;

  @Exclude()
  @Column()
  global_unit_type_id: number;

  @Expose({ name: 'cgiarEntityTypeDTO' })
  @ManyToOne(() => CgiarEntityType, { eager: true })
  @JoinColumn({ name: 'global_unit_type_id' })
  cgiarEntityType: CgiarEntityType;
}
