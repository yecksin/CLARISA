import {
  Controller,
  Get,
  Param,
  ClassSerializerInterceptor,
  UseInterceptors,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { PartnerRequestService } from './partner-request.service';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class PartnerRequestController {
  constructor(private readonly partnerRequestService: PartnerRequestService) {}

  @Get()
  async findAll(@Query('show') show: FindAllOptions) {
    return await this.partnerRequestService.findAll(show);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.partnerRequestService.findOne(id);
  }
}
