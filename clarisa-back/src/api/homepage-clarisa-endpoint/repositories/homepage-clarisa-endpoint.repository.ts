import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { HomepageClarisaEndpoint } from '../entities/homepage-clarisa-endpoint.entity';

@Injectable()
export class HomepageClarisaEndpointRepository extends Repository<HomepageClarisaEndpoint> {
  constructor(private dataSource: DataSource) {
    super(HomepageClarisaEndpoint, dataSource.createEntityManager());
  }
}
