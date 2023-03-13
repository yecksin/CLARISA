import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('qa_token_auth')
export class QaTokenAuth {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({
    type: 'datetime',
    width: 6,
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @Column({
    type: 'datetime',
    width: 6,
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;

  @Column({ type: 'longtext', nullable: false })
  token: string;

  @Column({ type: 'datetime', nullable: true })
  expiration_date: Date;

  @Column({ type: 'varchar', length: 255, nullable: false })
  mis_acronym: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  username: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'int', nullable: false })
  app_user: number;

  @Column({ type: 'text', nullable: true })
  official_code: string;
}
