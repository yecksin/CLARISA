import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { HomepageClarisaCategory } from '../../homepage-clarisa-category/entities/homepage-clarisa-category.entity';
import { HomepageClarisaEndpoint } from '../../homepage-clarisa-endpoint/entities/homepage-clarisa-endpoint.entity';

@Entity('hp_clarisa_category_endpoints')
export class HomepageClarisaCategoryEndpoint extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  //relations

  @Column({ type: 'bigint', nullable: false })
  category_id: number;

  @Column({ type: 'bigint', nullable: false })
  endpoint_id: number;

  //object relations

  @ManyToOne(
    () => HomepageClarisaCategory,
    (hpc) => hpc.category_endpoint_array,
  )
  @JoinColumn({ name: 'category_id' })
  category_object: HomepageClarisaCategory;

  @ManyToOne(
    () => HomepageClarisaEndpoint,
    (hpe) => hpe.category_endpoint_array,
  )
  @JoinColumn({ name: 'endpoint_id' })
  endpoint_object: HomepageClarisaEndpoint;
}
