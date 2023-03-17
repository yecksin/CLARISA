import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { SdgIndicator } from '../entities/sdg-indicator.entity';

@Injectable()
export class SdgIndicatorRepository extends Repository<SdgIndicator> {
  constructor(private dataSource: DataSource) {
    super(SdgIndicator, dataSource.createEntityManager());
  }
}
