import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  HttpException,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { SourcesService } from './sources.service';
import { CreateSourceDto } from './dto/create-source.dto';
import { UpdateSourceDto } from './dto/update-source.dto';
import { Response } from 'express';
import { Source } from './entities/source.entity';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';

@Controller()
export class SourcesController {
  constructor(private readonly sourcesService: SourcesService) {}

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
