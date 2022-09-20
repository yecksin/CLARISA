import { Exclude, Expose } from 'class-transformer';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('geographic_scopes')
export class GeographicScope extends AuditableEntity {
  @Expose({ name: 'code' })
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Exclude()
  @Column()
  iati_name: string;

  @Column()
  definition: string;

  @Exclude()
  @Column({ type: 'tinyint' })
  is_onecgiar: boolean;

  @Exclude()
  @Column({ type: 'tinyint' })
  is_legacy: boolean;
}
