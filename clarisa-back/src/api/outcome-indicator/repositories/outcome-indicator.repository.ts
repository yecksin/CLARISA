import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { OutcomeIndicator } from '../entities/outcome-indicator.entity';

@Injectable()
export class OutcomeIndicatorRepository extends Repository<OutcomeIndicator> {
  constructor(private dataSource: DataSource) {
    super(OutcomeIndicator, dataSource.createEntityManager());
  }
}
