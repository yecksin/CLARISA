import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, Res, HttpStatus, HttpException } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DepthDescriptionService } from './depth-description.service';
import { UpdateDepthDescriptionDto } from './dto/update-depth-description.dto';
import { DepthDescription } from './entities/depth-description.entity';
import { Response } from 'express';

@Controller('depth-description')
export class DepthDescriptionController {
  constructor(private readonly depthDescriptionService: DepthDescriptionService) {}

  @Get()
  async findAll(@Query('show') show : FindAllOptions) {
    return await this.depthDescriptionService.findAll(show);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.depthDescriptionService.findOne(id);
  }

  @Patch('update')
  async update(@Res() res: Response, @Body() updateDepthDescriptionDtoList: UpdateDepthDescriptionDto[]) {
    try {
      const result : DepthDescription[] = await this.depthDescriptionService.update(updateDepthDescriptionDtoList);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
