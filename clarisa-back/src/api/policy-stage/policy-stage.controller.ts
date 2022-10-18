import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
  Res,
  HttpStatus,
  HttpException,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { PolicyStageService } from './policy-stage.service';
import { CreatePolicyStageDto } from './dto/create-policy-stage.dto';
import { UpdatePolicyStageDto } from './dto/update-policy-stage.dto';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Response } from 'express';
import { PolicyStage } from './entities/policy-stage.entity';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class PolicyStageController {
  constructor(private readonly policyStageService: PolicyStageService) {}

  @Get()
  async findAll(
    @Query('show') show: FindAllOptions,
    @Query('type') type: string,
  ) {
    return await this.policyStageService.findAll(show, type);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.policyStageService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body() updatePolicyStageDtoList: UpdatePolicyStageDto[],
  ) {
    try {
      const result: PolicyStage[] = await this.policyStageService.update(
        updatePolicyStageDtoList,
      );
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
