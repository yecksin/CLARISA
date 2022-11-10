import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';

@Entity('hp_clarisa_category_endpoints')
export class HomepageClarisaCategoryEndpoint extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category_id: number;

  @Column()
  endpoint_id: number;
}
