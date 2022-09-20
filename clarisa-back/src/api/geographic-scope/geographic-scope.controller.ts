import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  Query,
  ParseIntPipe,
  Res,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { GeographicScopeService } from './geographic-scope.service';
import { CreateGeographicScopeDto } from './dto/create-geographic-scope.dto';
import { UpdateGeographicScopeDto } from './dto/update-geographic-scope.dto';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { IndicatorTypeEnum } from 'src/shared/entities/enums/indicator-types';
import { Response } from 'express';
import { GeographicScope } from './entities/geographic-scope.entity';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class GeographicScopeController {
  constructor(
    private readonly geographicScopeService: GeographicScopeService,
  ) {}

  @Get()
  async findAll(
    @Query('show') show: FindAllOptions,
    @Query('type') type: IndicatorTypeEnum,
  ) {
    return await this.geographicScopeService.findAll(show, type);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.geographicScopeService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body() updateGeographicScopeDtoList: UpdateGeographicScopeDto[],
  ) {
    try {
      const result: GeographicScope[] =
        await this.geographicScopeService.update(updateGeographicScopeDtoList);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
