import { Injectable } from '@nestjs/common';
import { CategoryEndpointDto } from './dto/category-endpoints.dto';
import { CreateHomepageClarisaCategoryEndpointDto } from './dto/create-homepage-clarisa-category-endpoint.dto';
import { UpdateHomepageClarisaCategoryEndpointDto } from './dto/update-homepage-clarisa-category-endpoint.dto';
import { HomepageClarisaCategoryEndpointRepository } from './repositories/homepage-clarisa-category-endpoint.repository';

@Injectable()
export class HomepageClarisaCategoryEndpointService {
  constructor(
    private homepageClarisaCategoryEndpointRepository: HomepageClarisaCategoryEndpointRepository,
  ) {}

  async findAll(): Promise<CategoryEndpointDto[]> {
    return this.homepageClarisaCategoryEndpointRepository.getCategoryEndpoints();
  }
}
