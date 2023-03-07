import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { BusinessCategory } from '../entities/business-category.entity';

@Injectable()
export class BusinessCategoryRepository extends Repository<BusinessCategory> {
  constructor(private dataSource: DataSource) {
    super(BusinessCategory, dataSource.createEntityManager());
  }
}
