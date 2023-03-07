import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Res,
  HttpStatus,
  HttpException,
  Query,
  ParseIntPipe,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { SourceService } from './source.service';
import { UpdateSourceDto } from './dto/update-source.dto';
import { Response } from 'express';
import { Source } from './entities/source.entity';
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

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body() updateSourceDtoList: UpdateSourceDto[],
  ) {
    try {
      const result: Source[] = await this.sourcesService.update(
        updateSourceDtoList,
      );
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
