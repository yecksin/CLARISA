import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Res, HttpStatus, HttpException, Query } from '@nestjs/common';
import { OutcomeIndicatorService } from './outcome-indicator.service';
import { CreateOutcomeIndicatorDto } from './dto/create-outcome-indicator.dto';
import { UpdateOutcomeIndicatorDto } from './dto/update-outcome-indicator.dto';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { OutcomeIndicator } from './entities/outcome-indicator.entity';
import { Response } from 'express';

@Controller()
export class OutcomeIndicatorController {
  constructor(private readonly outcomeIndicatorService: OutcomeIndicatorService) {}

  @Get()
  async findAll(@Query('show') show : FindAllOptions) {
    return await this.outcomeIndicatorService.findAll(show);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.outcomeIndicatorService.findOne(id);
  }

  @Patch('update')
  async update(@Res() res: Response, @Body() updateOutcomeIndicatorDtoList: UpdateOutcomeIndicatorDto[]) {
    try {
      const result : OutcomeIndicator[] = await this.outcomeIndicatorService.update(updateOutcomeIndicatorDtoList);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
