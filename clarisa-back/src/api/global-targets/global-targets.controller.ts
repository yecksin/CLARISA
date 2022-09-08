import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Query,
  HttpStatus,
  HttpException,
  Res,
  ParseIntPipe,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { GlobalTargetsService } from './global-targets.service';
import { UpdateGlobalTargetDto } from './dto/update-global-target.dto';
import { GlobalTarget } from './entities/global-target.entity';
import { Response } from 'express';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class GlobalTargetsController {
  constructor(private readonly globalTargetsService: GlobalTargetsService) {}

  @Get()
  findAll(@Query('show') show: FindAllOptions) {
    return this.globalTargetsService.findAll(show);
  }

  @Get('get/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.globalTargetsService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body() updateUserDtoList: UpdateGlobalTargetDto[],
  ) {
    try {
      const result: GlobalTarget[] = await this.globalTargetsService.update(
        updateUserDtoList,
      );
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
