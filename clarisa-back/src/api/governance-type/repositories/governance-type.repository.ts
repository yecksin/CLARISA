import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { GovernanceType } from '../entities/governance-type.entity';

@Injectable()
export class GovernanceTypeRepository extends Repository<GovernanceType> {
  constructor(private dataSource: DataSource) {
    super(GovernanceType, dataSource.createEntityManager());
  }
}
