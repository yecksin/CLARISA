import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { HomepageClarisaCategoryEndpoint } from '../../homepage-clarisa-category-endpoint/entities/homepage-clarisa-category-endpoint.entity';

@Entity('hp_clarisa_categories')
export class HomepageClarisaCategory extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'text', nullable: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  //relations

  @Column({ type: 'bigint', nullable: true })
  parent_id: number;

  //object relations

  @ManyToOne(() => HomepageClarisaCategory, (hpc) => hpc.children)
  @JoinColumn({ name: 'parent_id' })
  //@Expose()
  parent: HomepageClarisaCategory;

  @OneToMany(() => HomepageClarisaCategory, (hpc) => hpc.parent)
  children: HomepageClarisaCategory[];

  @OneToMany(
    () => HomepageClarisaCategoryEndpoint,
    (hpce) => hpce.category_object,
  )
  category_endpoint_array: HomepageClarisaCategoryEndpoint[];
}
