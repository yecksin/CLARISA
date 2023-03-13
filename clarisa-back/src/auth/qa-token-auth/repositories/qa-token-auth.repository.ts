import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { QaTokenAuth } from '../entities/qa-token-auth.entity';

@Injectable()
export class QaTokenAuthRepository extends Repository<QaTokenAuth> {
  constructor(private dataSource: DataSource) {
    super(QaTokenAuth, dataSource.createEntityManager());
  }
}
