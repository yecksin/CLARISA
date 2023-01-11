import { Injectable } from '@nestjs/common/decorators';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { BiParameter } from '../entities/bi-parameter.entity';

@Injectable()
export class BiParameterRepository extends Repository<BiParameter> {
  constructor(private dataSource: DataSource) {
    super(BiParameter, dataSource.createEntityManager());
  }
}
