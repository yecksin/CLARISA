import { Exclude } from "class-transformer";
import { AuditableEntity } from "src/shared/entities/extends/auditable-entity.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('innovation_types')
export class InnovationType extends AuditableEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;

    @Column()
    definition: string;

    @Column({ type: 'tinyint' })
    @Exclude()
    is_onecgiar: boolean;
    
    @Exclude()
    @Column({ type: 'tinyint' })
    is_marlo: boolean;
}
