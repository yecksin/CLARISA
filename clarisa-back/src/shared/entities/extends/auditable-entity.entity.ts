import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../../api/user/entities/user.entity';

export abstract class AuditableEntity {
  @Exclude({ toPlainOnly: true })
  @Column()
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Exclude({ toPlainOnly: true })
  @Column({ type: 'bigint', nullable: false })
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
  @Column({ type: 'bigint', nullable: false })
  updated_by: number;

  @Exclude({ toPlainOnly: true })
  @Column({ type: 'text', nullable: true })
  modification_justification: string;

  @Exclude({ toPlainOnly: true })
  @Column({ type: 'tinyint', nullable: false, default: () => '1' })
  is_active: boolean;

  @Exclude()
  created_by_object: any;

  @Exclude()
  updated_by_object: any;
}
