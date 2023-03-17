import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { BusinessCategory } from '../entities/business-category.entity';

@Injectable()
export class BusinessCategoryRepository extends Repository<BusinessCategory> {
  constructor(private dataSource: DataSource) {
    super(BusinessCategory, dataSource.createEntityManager());
  }
}
