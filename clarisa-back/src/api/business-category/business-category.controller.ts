import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ClassSerializerInterceptor, Query, ParseIntPipe, Res, HttpStatus, HttpException } from '@nestjs/common';
import { Response } from 'express';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { BusinessCategoryService } from './business-category.service';
import { CreateBusinessCategoryDto } from './dto/create-business-category.dto';
import { UpdateBusinessCategoryDto } from './dto/update-business-category.dto';
import { BusinessCategory } from './entities/business-category.entity';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class BusinessCategoryController {
  constructor(
    private readonly businessCategoryService: BusinessCategoryService,
  ) {}

  @Get()
  async findAll(@Query('show') show: FindAllOptions) {
    return await this.businessCategoryService.findAll(show);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.businessCategoryService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body() updateBusinessCategoryDtoList: UpdateBusinessCategoryDto[],
  ) {
    try {
      const result: BusinessCategory[] =
        await this.businessCategoryService.update(
          updateBusinessCategoryDtoList,
        );
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
