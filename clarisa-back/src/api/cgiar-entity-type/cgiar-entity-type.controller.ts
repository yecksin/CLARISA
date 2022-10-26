import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Query,
  ParseIntPipe,
  Res,
  HttpStatus,
  HttpException,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { CgiarEntityTypeService } from './cgiar-entity-type.service';
import { UpdateCgiarEntityTypeDto } from './dto/update-cgiar-entity-type.dto';
import { CgiarEntityType } from './entities/cgiar-entity-type.entity';
import { Response } from 'express';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class CgiarEntityTypeController {
  constructor(
    private readonly cgiarEntityTypeService: CgiarEntityTypeService,
  ) {}

  @Get()
  async findAll(@Query('show') show: FindAllOptions) {
    return await this.cgiarEntityTypeService.findAll(show);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.cgiarEntityTypeService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body() updateCgiarEntityTypeDtoList: UpdateCgiarEntityTypeDto[],
  ) {
    try {
      const result: CgiarEntityType[] =
        await this.cgiarEntityTypeService.update(updateCgiarEntityTypeDtoList);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
