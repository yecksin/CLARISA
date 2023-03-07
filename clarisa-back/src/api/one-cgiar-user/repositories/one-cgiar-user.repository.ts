import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { OneCgiarUser } from '../entities/one-cgiar-user.entity';

@Injectable()
export class OneCgiarUserRepository extends Repository<OneCgiarUser> {
  constructor(private dataSource: DataSource) {
    super(OneCgiarUser, dataSource.createEntityManager());
  }
}
