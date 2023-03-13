import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { HomepageClarisaCategory } from '../entities/homepage-clarisa-category.entity';

@Injectable()
export class HomepageClarisaCategoryRepository extends Repository<HomepageClarisaCategory> {
  constructor(private dataSource: DataSource) {
    super(HomepageClarisaCategory, dataSource.createEntityManager());
  }
}
