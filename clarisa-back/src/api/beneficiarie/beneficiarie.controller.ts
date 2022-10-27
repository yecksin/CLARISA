import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  UseInterceptors,
  ClassSerializerInterceptor,
  Query,
  ParseIntPipe,
  Res,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { BeneficiarieService } from './beneficiarie.service';
import { UpdateBeneficiarieDto } from './dto/update-beneficiarie.dto';
import { Response } from 'express';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Beneficiarie } from './entities/beneficiarie.entity';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class BeneficiarieController {
  constructor(private readonly beneficiarieService: BeneficiarieService) {}

  @Get()
  async findAll(@Query('show') show: FindAllOptions) {
    return await this.beneficiarieService.findAll(show);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.beneficiarieService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body() updateBeneficiarieDtoList: UpdateBeneficiarieDto[],
  ) {
    try {
      const result: Beneficiarie[] = await this.beneficiarieService.update(
        updateBeneficiarieDtoList,
      );
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
