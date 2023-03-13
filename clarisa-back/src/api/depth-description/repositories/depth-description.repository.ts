import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { DepthDescription } from '../entities/depth-description.entity';

@Injectable()
export class DepthDescriptionRepository extends Repository<DepthDescription> {
  constructor(private dataSource: DataSource) {
    super(DepthDescription, dataSource.createEntityManager());
  }
}
