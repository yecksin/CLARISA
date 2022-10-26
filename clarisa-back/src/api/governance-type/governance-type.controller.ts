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
import { GovernanceTypeService } from './governance-type.service';
import { UpdateGovernanceTypeDto } from './dto/update-governance-type.dto';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Response } from 'express';
import { GovernanceType } from './entities/governance-type.entity';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class GovernanceTypeController {
  constructor(private readonly governanceTypeService: GovernanceTypeService) {}

  @Get()
  async findAll(@Query('show') show: FindAllOptions) {
    return await this.governanceTypeService.findAll(show);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.governanceTypeService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body() updateGovernanceTypeDtoList: UpdateGovernanceTypeDto[],
  ) {
    try {
      const result: GovernanceType[] = await this.governanceTypeService.update(
        updateGovernanceTypeDtoList,
      );
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
