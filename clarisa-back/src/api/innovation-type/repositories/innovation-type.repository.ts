import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { InnovationType } from '../entities/innovation-type.entity';

@Injectable()
export class InnovationTypeRepository extends Repository<InnovationType> {
  constructor(private dataSource: DataSource) {
    super(InnovationType, dataSource.createEntityManager());
  }
}
