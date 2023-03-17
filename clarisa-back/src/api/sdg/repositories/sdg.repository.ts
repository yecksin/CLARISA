import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Sdg } from '../entities/sdg.entity';

@Injectable()
export class SdgRepository extends Repository<Sdg> {
  constructor(private dataSource: DataSource) {
    super(Sdg, dataSource.createEntityManager());
  }
}
