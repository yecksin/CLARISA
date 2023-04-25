import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SecondOrderAdministrativeDivisionService } from './second-order-administrative-division.service';
import { CreateSecondOrderAdministrativeDivisionDto } from './dto/create-second-order-administrative-division.dto';
import { UpdateSecondOrderAdministrativeDivisionDto } from './dto/update-second-order-administrative-division.dto';
import { Query } from '@nestjs/common/decorators';

@Controller()
export class SecondOrderAdministrativeDivisionController {
  constructor(private readonly secondOrderAdministrativeDivisionService: SecondOrderAdministrativeDivisionService) { }

  @Get('iso-alpha-2/:isoAlpha/admin-code-1/:adminCode')
  findAll(
    @Param('isoAlpha') isoAlpha: string = '',
    @Param('adminCode') adminCode: string = ''
  ) {
    return this.secondOrderAdministrativeDivisionService.findIsoAlpha2AdminCode(isoAlpha, adminCode);
  }
}
