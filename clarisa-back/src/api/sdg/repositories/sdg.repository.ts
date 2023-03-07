import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { Sdg } from '../entities/sdg.entity';

@Injectable()
export class SdgRepository extends Repository<Sdg> {
  constructor(private dataSource: DataSource) {
    super(Sdg, dataSource.createEntityManager());
  }
}
