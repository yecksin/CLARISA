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
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { JwtAuthGuard } from '../../shared/guards/jwt-auth.guard';
import { PermissionGuard } from '../../shared/guards/permission.guard';
import { BiParameterService } from './bi-parameter.service';
import { UpdateBiParameterDto } from './dto/update-bi-parameter.dto';
import { BiParameter } from './entities/bi-parameter.entity';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard, PermissionGuard)
export class BiParameterController {
  constructor(private readonly biParameterService: BiParameterService) {}

  @Get()
  async findAll(@Query('show') show: FindAllOptions) {
    return await this.biParameterService.findAll(show);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.biParameterService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body() updatePolicyTypeDtoList: UpdateBiParameterDto[],
  ) {
    try {
      const result: BiParameter[] = await this.biParameterService.update(
        updatePolicyTypeDtoList,
      );
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
