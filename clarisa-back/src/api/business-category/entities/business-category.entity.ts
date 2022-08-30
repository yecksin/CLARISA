import { AuditableEntity } from "src/shared/entities/extends/auditable-entity.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('business_categories')
export class BusinessCategory extends AuditableEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
}
