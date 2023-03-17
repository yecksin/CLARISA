import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { GeneralAcronym } from '../entities/general-acronym.entity';

@Injectable()
export class GeneralAcronymRepository extends Repository<GeneralAcronym> {
  constructor(private dataSource: DataSource) {
    super(GeneralAcronym, dataSource.createEntityManager());
  }
}
