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
import { InstitutionDictionaryService } from './institution-dictionary.service';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Response } from 'express';
import { UpdateInstitutionDictionaryDto } from './dto/update-institution-dictionary.dto';
import { InstitutionDictionary } from './entities/institution-dictionary.entity';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class InstitutionDictionaryController {
  constructor(
    private readonly institutionDictionaryService: InstitutionDictionaryService,
  ) {}

  @Get()
  async findAll(@Query('show') show: FindAllOptions) {
    return await this.institutionDictionaryService.findAll(show);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.institutionDictionaryService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body() updateUserDtoList: UpdateInstitutionDictionaryDto[],
  ) {
    try {
      const result: InstitutionDictionary[] =
        await this.institutionDictionaryService.update(updateUserDtoList);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
