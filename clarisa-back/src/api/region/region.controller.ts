import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ClassSerializerInterceptor, Query, ParseIntPipe, Res, HttpStatus, HttpException } from '@nestjs/common';
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Response } from 'express';
import { Region } from './entities/region.entity';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Get()
  async findAll(@Query('show') show : FindAllOptions) {
    return await this.regionService.findAll(show);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.regionService.findOne(id);
  }

  @Patch('update')
  async update(@Res() res: Response, @Body() updateRegionDtoList: UpdateRegionDto[]) {
    try {
      const result : Region[] = await this.regionService.update(updateRegionDtoList);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
