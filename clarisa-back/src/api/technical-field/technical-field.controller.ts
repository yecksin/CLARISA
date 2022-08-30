import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ClassSerializerInterceptor, Query, ParseIntPipe, Res, HttpStatus, HttpException } from '@nestjs/common';
import { TechnicalFieldService } from './technical-field.service';
import { CreateTechnicalFieldDto } from './dto/create-technical-field.dto';
import { UpdateTechnicalFieldDto } from './dto/update-technical-field.dto';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Response } from 'express';
import { TechnicalField } from './entities/technical-field.entity';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class TechnicalFieldController {
  constructor(
    private readonly technicalFieldService: TechnicalFieldService,
  ) {}

  @Get()
  async findAll(@Query('show') show: FindAllOptions) {
    return await this.technicalFieldService.findAll(show);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.technicalFieldService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body() updateTechnicalFieldDtoList: UpdateTechnicalFieldDto[],
  ) {
    try {
      const result: TechnicalField[] =
        await this.technicalFieldService.update(
          updateTechnicalFieldDtoList,
        );
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
