import {
  Controller,
  Get,
  Param,
  Query,
  ParseIntPipe,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { SourceService } from './source.service';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class SourceController {
  constructor(private readonly sourcesService: SourceService) {}

  @Get()
  async findAll(@Query('show') show: FindAllOptions) {
    return await this.sourcesService.findAll(show);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.sourcesService.findOne(id);
  }
}
