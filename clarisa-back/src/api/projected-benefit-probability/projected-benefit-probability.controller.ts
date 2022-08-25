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
import { ProjectedBenefitProbabilityService } from './projected-benefit-probability.service';
import { CreateProjectedBenefitProbabilityDto } from './dto/create-projected-benefit-probability.dto';
import { UpdateProjectedBenefitProbabilityDto } from './dto/update-projected-benefit-probability.dto';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Response } from 'express';
import { ProjectedBenefitProbability } from './entities/projected-benefit-probability.entity';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class ProjectedBenefitProbabilityController {
  constructor(
    private readonly projectedBenefitProbabilityService: ProjectedBenefitProbabilityService,
  ) {}

  @Get()
  async findAll(@Query('show') show: FindAllOptions) {
    return await this.projectedBenefitProbabilityService.findAll(show);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.projectedBenefitProbabilityService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body()
    updateProjectedBenefitProbabilityDtoList: UpdateProjectedBenefitProbabilityDto[],
  ) {
    try {
      const result: ProjectedBenefitProbability[] =
        await this.projectedBenefitProbabilityService.update(
          updateProjectedBenefitProbabilityDtoList,
        );
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
