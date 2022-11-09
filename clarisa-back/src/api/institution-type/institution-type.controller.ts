import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  UseInterceptors,
  ClassSerializerInterceptor,
  Query,
  ParseIntPipe,
  Res,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { InstitutionTypeService } from './institution-type.service';
import { UpdateInstitutionTypeDto } from './dto/update-institution-type.dto';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Response } from 'express';
import { InstitutionType } from './entities/institution-type.entity';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class InstitutionTypeController {
  constructor(
    private readonly institutionTypeService: InstitutionTypeService,
  ) {}

  @Get()
  async findAll(
    @Query('show') show: FindAllOptions,
    @Query('type') type: string,
  ) {
    return await this.institutionTypeService.findAll(show, type);
  }

  @Get('/from-parent')
  async findAllFromParentToChildren(
    @Query('show') show: FindAllOptions,
    @Query('type') type: string,
  ) {
    return await this.institutionTypeService.findAllFromParentToChildren(
      show,
      type,
    );
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.institutionTypeService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body() updateInstitutionTypeDtoList: UpdateInstitutionTypeDto[],
  ) {
    try {
      const result: InstitutionType[] =
        await this.institutionTypeService.update(updateInstitutionTypeDtoList);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
