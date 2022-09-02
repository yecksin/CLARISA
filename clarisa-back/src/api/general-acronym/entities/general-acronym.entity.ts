import { Expose } from 'class-transformer';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('general_acronyms')
export class GeneralAcronym extends AuditableEntity{
    @PrimaryGeneratedColumn()
    @Expose({ name: 'code' })
    id: number;
  
    @Column()
    acronym: string;
  
    @Column()
    description: string;
}
