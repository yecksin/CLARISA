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
  UseGuards,
} from '@nestjs/common';
import { HomepageClarisaCategoryEndpointService } from './homepage-clarisa-category-endpoint.service';
import { CreateHomepageClarisaCategoryEndpointDto } from './dto/create-homepage-clarisa-category-endpoint.dto';
import { UpdateHomepageClarisaCategoryEndpointDto } from './dto/update-homepage-clarisa-category-endpoint.dto';
import { ClarisaPageOnly } from 'src/shared/decorators/clarisa-page.decorator';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';
import { PermissionGuard } from 'src/shared/guards/permission.guard';

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
