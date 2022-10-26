import {
  Controller,
  Get,
  ClassSerializerInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { HomepageClarisaCategoryEndpointService } from './homepage-clarisa-category-endpoint.service';

//@ClarisaPageOnly()
//@UseGuards(JwtAuthGuard, PermissionGuard)
@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class HomepageClarisaCategoryEndpointController {
  constructor(
    private readonly homepageClarisaCategoryEndpointService: HomepageClarisaCategoryEndpointService,
  ) {}

  @Get()
  findAll() {
    return this.homepageClarisaCategoryEndpointService.findAll();
  }
}
