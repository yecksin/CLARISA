import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ClassSerializerInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { HomepageClarisaCategoryEndpointService } from './homepage-clarisa-category-endpoint.service';
import { CreateHomepageClarisaCategoryEndpointDto } from './dto/create-homepage-clarisa-category-endpoint.dto';
import { UpdateHomepageClarisaCategoryEndpointDto } from './dto/update-homepage-clarisa-category-endpoint.dto';

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
