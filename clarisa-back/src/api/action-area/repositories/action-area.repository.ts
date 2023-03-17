import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ActionArea } from '../entities/action-area.entity';

@Injectable()
export class ActionAreaRepository extends Repository<ActionArea> {
  constructor(private dataSource: DataSource) {
    super(ActionArea, dataSource.createEntityManager());
  }
}
