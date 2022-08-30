import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('one_cgiar_users')
export class Beneficiarie extends AuditableEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
