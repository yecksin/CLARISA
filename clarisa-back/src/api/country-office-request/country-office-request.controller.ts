import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseInterceptors,
  ClassSerializerInterceptor,
  Query,
  ParseIntPipe,
  UseGuards,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { ResponseDto } from 'src/shared/entities/dtos/response-dto';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';
import { PermissionGuard } from 'src/shared/guards/permission.guard';
import { UserData } from 'src/shared/interfaces/user-data';
import { CountryOfficeRequestService } from './country-office-request.service';
import { CountryOfficeRequestDto } from './dto/country-office-request.dto';
import { CreateCountryOfficeRequestDto } from './dto/create-country-office-request.dto';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class CountryOfficeRequestController {
  constructor(
    private readonly countryOfficeRequestService: CountryOfficeRequestService,
  ) {}

  @Get()
  async findAll(
    @Query('status') status: string,
    @Query('source') source: string,
  ) {
    return await this.countryOfficeRequestService.findAll(status, source);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.countryOfficeRequestService.findOne(id);
  }

  @Post('create')
  @UseGuards(JwtAuthGuard, PermissionGuard)
  async createCountryOfficeRequests(
    @Req() request: Request,
    @Body() newCountryOfficeRequest: CreateCountryOfficeRequestDto,
    @Query('mis') mis: string,
  ): Promise<ResponseDto<CountryOfficeRequestDto[]>> {
    const userData: UserData & { mis: string } = request.user as UserData & {
      mis: string;
    };
    userData.mis = mis;

    return this.countryOfficeRequestService.createCountryOfficeRequest(
      newCountryOfficeRequest,
      userData,
    );
  }
}
