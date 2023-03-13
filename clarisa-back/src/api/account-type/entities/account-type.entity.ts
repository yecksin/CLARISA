import { Exclude, Expose } from 'class-transformer';

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { Account } from '../../account/entities/account.entity';

@Entity('account_types')
export class AccountType {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'text', nullable: false })
  @Exclude()
  name: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  @Exclude()
  acronym: string;

  @Expose({ name: 'name' })
  get composedName(): string {
    return `${this.acronym} ${this.name}`;
  }

  //object relations

  @OneToMany(() => Account, (at) => at.account_type)
  accounts: Account[];

  //auditable fields

  @Column(() => AuditableEntity, { prefix: '' })
  auditableFields: AuditableEntity;
}
