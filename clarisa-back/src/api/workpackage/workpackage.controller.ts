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
import { WorkpackageService } from './workpackage.service';
import { UpdateWorkpackageDto } from './dto/update-workpackage.dto';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Response } from 'express';
import { Workpackage } from './entities/workpackage.entity';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class WorkpackageController {
  constructor(private readonly workpackageService: WorkpackageService) {}

  @Get()
  async findAll(
    @Query('workpackages') showWorkpackages: FindAllOptions,
    @Query('initiatives') showInitiatives: FindAllOptions,
  ) {
    return await this.workpackageService.findAll(
      showWorkpackages,
      showInitiatives,
    );
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.workpackageService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body() updateInitiativeDtoList: UpdateWorkpackageDto[],
  ) {
    try {
      const result: Workpackage[] = await this.workpackageService.update(
        updateInitiativeDtoList,
      );
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
