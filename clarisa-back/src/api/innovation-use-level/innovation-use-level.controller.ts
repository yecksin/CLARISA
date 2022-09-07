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
import { InnovationUseLevelService } from './innovation-use-level.service';
import { CreateInnovationUseLevelDto } from './dto/create-innovation-use-level.dto';
import { UpdateInnovationUseLevelDto } from './dto/update-innovation-use-level.dto';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { InnovationUseLevel } from './entities/innovation-use-level.entity';
import { Response } from 'express';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class InnovationUseLevelController {
  constructor(
    private readonly innovationUseLevelService: InnovationUseLevelService,
  ) {}

  @Get()
  async findAll(@Query('show') show: FindAllOptions) {
    return await this.innovationUseLevelService.findAll(show);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.innovationUseLevelService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body() updateInnovationUseLevelDtoList: UpdateInnovationUseLevelDto[],
  ) {
    try {
      const result: InnovationUseLevel[] =
        await this.innovationUseLevelService.update(
          updateInnovationUseLevelDtoList,
        );
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
