import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { InnovationCharacteristic } from '../entities/innovation-characteristic.entity';

@Injectable()
export class InnovationCharacteristicRepository extends Repository<InnovationCharacteristic> {
  constructor(private dataSource: DataSource) {
    super(InnovationCharacteristic, dataSource.createEntityManager());
  }
}
