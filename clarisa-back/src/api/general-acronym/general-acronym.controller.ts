import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
  Res,
  HttpStatus,
  HttpException,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { GeneralAcronymService } from './general-acronym.service';
import { UpdateGeneralAcronymDto } from './dto/update-general-acronym.dto';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Response } from 'express';
import { GeneralAcronym } from './entities/general-acronym.entity';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class GeneralAcronymController {
  constructor(private readonly generalAcronymService: GeneralAcronymService) {}

  @Get()
  async findAll(@Query('show') show: FindAllOptions) {
    return await this.generalAcronymService.findAll(show);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.generalAcronymService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body() updateGeneralAcronymDtoList: UpdateGeneralAcronymDto[],
  ) {
    try {
      const result: GeneralAcronym[] = await this.generalAcronymService.update(
        updateGeneralAcronymDtoList,
      );
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
