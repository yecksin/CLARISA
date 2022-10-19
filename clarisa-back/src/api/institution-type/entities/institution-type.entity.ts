import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('institution_types')
export class InstitutionType extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  acronym: string;

  @Column()
  description: string;

  @Column()
  source_id: number;
}
