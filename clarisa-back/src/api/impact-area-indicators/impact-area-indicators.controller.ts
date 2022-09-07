import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Query,
  ParseIntPipe,
  HttpStatus,
  Res,
  HttpException,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { ImpactAreaIndicatorsService } from './impact-area-indicators.service';
import { UpdateImpactAreaIndicatorDto } from './dto/update-impact-area-indicator.dto';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { ImpactAreaIndicator } from './entities/impact-area-indicator.entity';
import { Response } from 'express';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class ImpactAreaIndicatorsController {
  constructor(
    private readonly impactAreaIndicatorsService: ImpactAreaIndicatorsService,
  ) {}

  @Get()
  async findAll(@Query('show') show: FindAllOptions) {
    return await this.impactAreaIndicatorsService.findAll(show);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.impactAreaIndicatorsService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body() updateImpactAreaIndicator: UpdateImpactAreaIndicatorDto[],
  ) {
    try {
      const result: ImpactAreaIndicator[] =
        await this.impactAreaIndicatorsService.update(
          updateImpactAreaIndicator,
        );
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
