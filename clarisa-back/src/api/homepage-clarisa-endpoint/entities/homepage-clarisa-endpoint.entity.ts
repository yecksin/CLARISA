import { Transform } from 'class-transformer';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { HomepageClarisaCategoryEndpoint } from '../../homepage-clarisa-category-endpoint/entities/homepage-clarisa-category-endpoint.entity';

@Entity('hp_clarisa_endpoints')
export class HomepageClarisaEndpoint extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'text', nullable: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  route: string;

  @Column({ type: 'text', nullable: true })
  http_method: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'json', nullable: true })
  @Transform(({ value }) => {
    return value;
  })
  request_json: string;

  @Column({ type: 'json', nullable: true })
  @Transform(({ value }) => {
    return value;
  })
  response_json: string;

  //object relations

  @OneToMany(
    () => HomepageClarisaCategoryEndpoint,
    (hpce) => hpce.endpoint_object,
  )
  category_endpoint_array: HomepageClarisaCategoryEndpoint[];
}
