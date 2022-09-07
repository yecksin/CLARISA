import { Controller, Get,  Body, Patch, Param,  UseInterceptors, ClassSerializerInterceptor, Query, ParseIntPipe, HttpStatus, HttpException, Res } from '@nestjs/common';
import { SdgIndicatorService } from './sdg-indicator.service';
import { UpdateSdgIndicatorDto } from './dto/update-sdg-indicator.dto';
import { Response } from 'express';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { SdgIndicator } from './entities/sdg-indicator.entity';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class SdgIndicatorController {
  constructor(private readonly sdgIndicatorService: SdgIndicatorService) {}

  @Get()
  async findAll(@Query('show') show : FindAllOptions) {
    return await this.sdgIndicatorService.findAll(show);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.sdgIndicatorService.findOne(id);
  }

  @Patch('update')
  async update(@Res() res: Response, @Body() updateSdgIndicatorDtoList: UpdateSdgIndicatorDto[]) {
    try {
      const result : SdgIndicator[] = await this.sdgIndicatorService.update(updateSdgIndicatorDtoList);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
