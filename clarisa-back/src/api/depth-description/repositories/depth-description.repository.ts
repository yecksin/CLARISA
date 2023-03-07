import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { DepthDescription } from '../entities/depth-description.entity';

@Injectable()
export class DepthDescriptionRepository extends Repository<DepthDescription> {
  constructor(private dataSource: DataSource) {
    super(DepthDescription, dataSource.createEntityManager());
  }
}
