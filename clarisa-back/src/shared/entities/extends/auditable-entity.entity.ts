import { Exclude } from 'class-transformer';
import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class AuditableEntity {
  @Exclude({ toPlainOnly: true })
  @Column()
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Exclude({ toPlainOnly: true })
  @Column()
  created_by: number;

  @Exclude({ toPlainOnly: true })
  @Column()
  @CreateDateColumn({
    type: 'timestamp',
    onUpdate: 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  @UpdateDateColumn({
    type: 'timestamp',
    onUpdate: 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  updated_at: Date;

  @Exclude({ toPlainOnly: true })
  @Column()
  updated_by: number;

  @Exclude({ toPlainOnly: true })
  @Column({ type: 'text' })
  modification_justification: string;

  @Exclude({ toPlainOnly: true })
  @Column({ type: 'tinyint' })
  is_active: boolean;
}
