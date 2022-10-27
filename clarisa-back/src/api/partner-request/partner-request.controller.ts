import {
  Controller,
  Get,
  Param,
  ClassSerializerInterceptor,
  UseInterceptors,
  Query,
  ParseIntPipe,
  Post,
  Req,
  UseGuards,
  Body,
} from '@nestjs/common';
import { Request } from 'express';
import { ResponseDto } from 'src/shared/entities/dtos/response-dto';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';
import { PermissionGuard } from 'src/shared/guards/permission.guard';
import { UserData } from 'src/shared/interfaces/user-data';
import { CreatePartnerRequestDto } from './dto/create-partner-request.dto';
import { PartnerRequestDto } from './dto/partner-request.dto';
import { PartnerRequestService } from './partner-request.service';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class PartnerRequestController {
  constructor(private readonly partnerRequestService: PartnerRequestService) {}

  @Get()
  async findAll(
    @Query('status') status: string,
    @Query('source') source: string,
  ) {
    return await this.partnerRequestService.findAll(status, source);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.partnerRequestService.findOne(id);
  }

  @Post('institution')
  @UseGuards(JwtAuthGuard, PermissionGuard)
  async createPartnerRequest(
    @Req() request: Request,
    @Body() newPartnerRequest: CreatePartnerRequestDto,
  ): Promise<ResponseDto<PartnerRequestDto>> {
    const userData: UserData = request.user as UserData;
    return this.partnerRequestService.createPartnerRequest(
      newPartnerRequest,
      userData,
    );
  }
}
