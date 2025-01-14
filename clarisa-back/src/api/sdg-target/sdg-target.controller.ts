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
import { SdgTargetService } from './sdg-target.service';
import { UpdateSdgTargetDto } from './dto/update-sdg-target.dto';
import { Response } from 'express';
import { SdgTarget } from './entities/sdg-target.entity';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class SdgTargetController {
  constructor(private readonly sdgTargetService: SdgTargetService) {}

  @Get()
  async findAll(@Query('show') show: FindAllOptions) {
    return await this.sdgTargetService.findAll(show);
  }

  @Get('sdg-ipsr')
  async findAllIpsr(@Query('show') show: FindAllOptions) {
    return await this.sdgTargetService.findAllIpsr(show);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.sdgTargetService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body() updateSdgTargetDtoList: UpdateSdgTargetDto[],
  ) {
    try {
      const result: SdgTarget[] = await this.sdgTargetService.update(
        updateSdgTargetDtoList,
      );
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
