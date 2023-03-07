import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { SdgIndicator } from '../entities/sdg-indicator.entity';

@Injectable()
export class SdgIndicatorRepository extends Repository<SdgIndicator> {
  constructor(private dataSource: DataSource) {
    super(SdgIndicator, dataSource.createEntityManager());
  }
}
