import { Exclude, Expose } from 'class-transformer';

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { Account } from '../../account/entities/account.entity';

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

  @OneToMany(() => Account, (at) => at.account_type)
  accounts: Promise<Account[]>;

  @Expose({ name: 'name' })
  get composedName(): string {
    return `${this.acronym} ${this.name}`;
  }
}
