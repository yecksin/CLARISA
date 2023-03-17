import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserMis } from '../entities/user-mis.entity';

@Injectable()
export class UserMisRepository extends Repository<UserMis> {
  constructor(private dataSource: DataSource) {
    super(UserMis, dataSource.createEntityManager());
  }
}
