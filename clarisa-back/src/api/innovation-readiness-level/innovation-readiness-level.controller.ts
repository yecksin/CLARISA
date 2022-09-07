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
import { InnovationReadinessLevelService } from './innovation-readiness-level.service';
import { CreateInnovationReadinessLevelDto } from './dto/create-innovation-readiness-level.dto';
import { UpdateInnovationReadinessLevelDto } from './dto/update-innovation-readiness-level.dto';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Response } from 'express';
import { InnovationReadinessLevel } from './entities/innovation-readiness-level.entity';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class InnovationReadinessLevelController {
  constructor(
    private readonly innovationReadinessLevelService: InnovationReadinessLevelService,
  ) {}

  @Get()
  async findAll(@Query('show') show: FindAllOptions) {
    return await this.innovationReadinessLevelService.findAll(show);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.innovationReadinessLevelService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body()
    updateInnovationReadinessLevelDtoList: UpdateInnovationReadinessLevelDto[],
  ) {
    try {
      const result: InnovationReadinessLevel[] =
        await this.innovationReadinessLevelService.update(
          updateInnovationReadinessLevelDtoList,
        );
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
