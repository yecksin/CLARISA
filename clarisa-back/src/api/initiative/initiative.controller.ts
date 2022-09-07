import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  Query,
  ParseIntPipe,
  Res,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { InitiativeService } from './initiative.service';
import { CreateInitiativeDto } from './dto/create-initiative.dto';
import { UpdateInitiativeDto } from './dto/update-initiative.dto';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Response } from 'express';
import { Initiative } from './entities/initiative.entity';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class InitiativeController {
  constructor(private readonly initiativeService: InitiativeService) {}

  @Get()
  async findAll(@Query('show') show: FindAllOptions) {
    return await this.initiativeService.findAll(show);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.initiativeService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body() updateInitiativeDtoList: UpdateInitiativeDto[],
  ) {
    try {
      const result: Initiative[] = await this.initiativeService.update(
        updateInitiativeDtoList,
      );
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
