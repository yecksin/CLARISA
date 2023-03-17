import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InnovationCharacteristic } from '../entities/innovation-characteristic.entity';

@Injectable()
export class InnovationCharacteristicRepository extends Repository<InnovationCharacteristic> {
  constructor(private dataSource: DataSource) {
    super(InnovationCharacteristic, dataSource.createEntityManager());
  }
}
