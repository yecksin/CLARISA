import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { SdgTarget } from '../entities/sdg-target.entity';

@Injectable()
export class SdgTargetRepository extends Repository<SdgTarget> {
  constructor(private dataSource: DataSource) {
    super(SdgTarget, dataSource.createEntityManager());
  }
}
