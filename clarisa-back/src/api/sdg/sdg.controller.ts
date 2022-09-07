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
import { SdgService } from './sdg.service';
import { UpdateSdgDto } from './dto/update-sdg.dto';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Sdg } from './entities/sdg.entity';
import { Response } from 'express';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class SdgController {
  constructor(private readonly sdgService: SdgService) {}

  @Get()
  async findAll(@Query('show') show: FindAllOptions) {
    return await this.sdgService.findAll(show);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.sdgService.findOne(id);
  }

  @Patch('update')
  async update(@Res() res: Response, @Body() updateSdgDtoList: UpdateSdgDto[]) {
    try {
      const result: Sdg[] = await this.sdgService.update(updateSdgDtoList);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
