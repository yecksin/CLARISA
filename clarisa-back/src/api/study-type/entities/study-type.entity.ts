import { Expose } from 'class-transformer';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('study_types')
export class StudyType extends AuditableEntity {
  @PrimaryGeneratedColumn()
  @Expose({name:'code'})
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({type: 'int', width: 2})
  norder: number;
}
