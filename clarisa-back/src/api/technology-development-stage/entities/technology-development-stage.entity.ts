import { Exclude, Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';

@Entity('technology_development_stages')
export class TechnologyDevelopmentStage {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Expose({ name: 'officialCode' })
  @Column({ type: 'text', nullable: true })
  official_code: string;

  @Column({ type: 'text', nullable: true })
  name: string;

  //auditable fields

  @Exclude()
  @Column(() => AuditableEntity, { prefix: '' })
  auditableFields: AuditableEntity;
}
