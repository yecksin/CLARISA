import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { HomepageClarisaCategory } from '../entities/homepage-clarisa-category.entity';

@Injectable()
export class HomepageClarisaCategoryRepository extends Repository<HomepageClarisaCategory> {
  constructor(private dataSource: DataSource) {
    super(HomepageClarisaCategory, dataSource.createEntityManager());
  }
}
