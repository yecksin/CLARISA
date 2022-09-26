import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HomepageClarisaCategory } from 'src/api/homepage-clarisa-category/entities/homepage-clarisa-category.entity';
import { DataSource, IsNull, Repository } from 'typeorm';
import { CategoryEndpointDto } from '../dto/category-endpoints.dto';
import { HomepageClarisaCategoryEndpoint } from '../entities/homepage-clarisa-category-endpoint.entity';

@Injectable()
export class HomepageClarisaCategoryEndpointRepository extends Repository<HomepageClarisaCategoryEndpoint> {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(HomepageClarisaCategory)
    private categoryRepository: Repository<HomepageClarisaCategory>,
  ) {
    super(HomepageClarisaCategoryEndpoint, dataSource.createEntityManager());
    this.categoryRepository = categoryRepository;
  }

  async getCategoryEndpoints(): Promise<CategoryEndpointDto[]> {
    return this.getSubcategories(null);
  }

  private async getSubcategories(
    parent_category_id: number,
  ): Promise<CategoryEndpointDto[]> {
    let categories: HomepageClarisaCategory[] =
      await this.categoryRepository.find({
        where: {
          parent_id: parent_category_id ? parent_category_id : IsNull(),
        },
      });

    const endpointsQuery: string = `
        select hce.name, hce.description, hce.route, hce.http_method, hce.request_json, hce.response_json from hp_clarisa_endpoints hce 
        join hp_clarisa_category_endpoints hcce on hcce.endpoint_id = hce.id 
        where hcce.category_id = ?
        order by hce.id;
    `;

    let categoryEndpoints: CategoryEndpointDto[] = [];

    await Promise.all(
      categories.map(async (c) => {
        let category: CategoryEndpointDto = new CategoryEndpointDto();

        category.name = c.name;
        category.description = c.description;

        category.subcategories = await this.getSubcategories(c.id);
        category.endpoints = await this.query(endpointsQuery, [c.id]);

        categoryEndpoints.push(category);
      }),
    );

    return categoryEndpoints.sort((a, b) => a.id - b.id);
  }
}
