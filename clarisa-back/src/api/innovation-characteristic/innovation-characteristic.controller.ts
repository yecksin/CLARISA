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
import { InnovationCharacteristicService } from './innovation-characteristic.service';
import { CreateInnovationCharacteristicDto } from './dto/create-innovation-characteristic.dto';
import { UpdateInnovationCharacteristicDto } from './dto/update-innovation-characteristic.dto';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Response } from 'express';
import { InnovationCharacteristic } from './entities/innovation-characteristic.entity';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class InnovationCharacteristicController {
  constructor(
    private readonly innovationCharacteristicService: InnovationCharacteristicService,
  ) {}

  @Get()
  async findAll(@Query('show') show: FindAllOptions) {
    return await this.innovationCharacteristicService.findAll(show);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.innovationCharacteristicService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body() updateUserDtoList: UpdateInnovationCharacteristicDto[],
  ) {
    try {
      const result: InnovationCharacteristic[] =
        await this.innovationCharacteristicService.update(updateUserDtoList);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
