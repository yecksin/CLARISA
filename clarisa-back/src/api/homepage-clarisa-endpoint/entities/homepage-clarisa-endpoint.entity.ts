import { Transform } from 'class-transformer';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('hp_clarisa_endpoints')
export class HomepageClarisaEndpoint extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  route: string;

  @Column()
  http_method: string;

  @Column()
  description: string;

  @Column()
  @Transform(({ value }) => {
    return value;
  })
  request_json: string;

  @Column()
  @Transform(({ value }) => {
    return value;
  })
  response_json: string;
}
