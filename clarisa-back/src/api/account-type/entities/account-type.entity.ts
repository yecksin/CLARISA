import { Exclude, Expose } from 'class-transformer';
import { Account } from 'src/api/account/entities/account.entity';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
