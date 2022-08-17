import { Expose } from 'class-transformer';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ImpactAreaIndicator } from '../../impact-area-indicators/entities/impact-area-indicator.entity';

@Entity('impact_areas')
export class ImpactArea extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  @Expose({name:'financialCode'})
  financial_code: string;

  
}
