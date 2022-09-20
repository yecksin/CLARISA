import { Expose } from 'class-transformer';
import { AccountType } from 'src/api/account-type/entities/account-type.entity';
import { AuditableEntity } from 'src/shared/entities/extends/auditable-entity.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('accounts')
export class Account extends AuditableEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  financial_code: string;

  @Column()
  description: string;

  @Column()
  account_type_id: number;

  @ManyToOne(() => AccountType, (a) => a.accounts)
  @JoinColumn({ name: 'account_type_id' })
  //@Expose()
  account_type: Promise<AccountType>;

  @Column()
  parent_id: number;

  @ManyToOne(() => Account, (a) => a.children)
  @JoinColumn({ name: 'parent_id' })
  //@Expose()
  parent: Promise<Account>;

  @OneToMany(() => Account, (a) => a.parent)
  children: Promise<Account[]>;
}
