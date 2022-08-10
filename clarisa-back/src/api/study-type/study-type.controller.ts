import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, HttpStatus, Res, HttpException } from '@nestjs/common';
import { StudyTypeService } from './study-type.service';
import { CreateStudyTypeDto } from './dto/create-study-type.dto';
import { UpdateStudyTypeDto } from './dto/update-study-type.dto';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { StudyType } from './entities/study-type.entity';
import { Response } from 'express';

@Controller()
export class StudyTypeController {
  constructor(private readonly studyTypeService: StudyTypeService) {}

  @Get()
  async findAll(@Query('show') show : FindAllOptions) {
    return await this.studyTypeService.findAll(show);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.studyTypeService.findOne(id);
  }

  @Patch('update')
  async update(@Res() res: Response, @Body() updateStudyTypeDtoList: UpdateStudyTypeDto[]) {
    try {
      const result : StudyType[] = await this.studyTypeService.update(updateStudyTypeDtoList);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
