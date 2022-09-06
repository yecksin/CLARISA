import { Exclude, Expose, Transform } from 'class-transformer';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('account_types')
export class AccountType extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Exclude()
  name: string;

  @Column()
  @Exclude()
  acronym: string;

  @Expose({ name: 'name' })
  get composedName(): string {
    return `${this.acronym} ${this.name}`;
  }
}
