import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InnovationType } from '../entities/innovation-type.entity';

@Injectable()
export class InnovationTypeRepository extends Repository<InnovationType> {
  constructor(private dataSource: DataSource) {
    super(InnovationType, dataSource.createEntityManager());
  }
}
