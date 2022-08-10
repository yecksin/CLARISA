import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ClassSerializerInterceptor, Query, ParseIntPipe, Res, HttpStatus, HttpException } from '@nestjs/common';
import { ProjectedBenefitService } from './projected-benefit.service';
import { CreateProjectedBenefitDto } from './dto/create-projected-benefit.dto';
import { UpdateProjectedBenefitDto } from './dto/update-projected-benefit.dto';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Response } from 'express';
import { ProjectedBenefit } from './entities/projected-benefit.entity';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class ProjectedBenefitController {
  constructor(private readonly projectedBenefitService: ProjectedBenefitService) {}

  @Get()
  async findAll(@Query('show') show : FindAllOptions) {
    return await this.projectedBenefitService.findAll(show);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.projectedBenefitService.findOne(id);
  }

  @Patch('update')
  async update(@Res() res: Response, @Body() updateProjectedBenefitDtoList: UpdateProjectedBenefitDto[]) {
    try {
      const result : ProjectedBenefit[] = await this.projectedBenefitService.update(updateProjectedBenefitDtoList);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
