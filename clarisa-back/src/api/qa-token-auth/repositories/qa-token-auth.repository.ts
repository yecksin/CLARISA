import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { QaTokenAuth } from '../entities/qa-token-auth.entity';

@Injectable()
export class QaTokenAuthRepository extends Repository<QaTokenAuth> {
  constructor(private dataSource: DataSource) {
    super(QaTokenAuth, dataSource.createEntityManager());
  }
}
