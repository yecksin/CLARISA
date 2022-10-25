import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ClassSerializerInterceptor,
  UseInterceptors,
  Query,
  ParseIntPipe,
  Res,
  HttpStatus,
  HttpException,
  UseGuards,
} from '@nestjs/common';
import { HomepageClarisaCategoryService } from './homepage-clarisa-category.service';
import { CreateHomepageClarisaCategoryDto } from './dto/create-homepage-clarisa-category.dto';
import { UpdateHomepageClarisaCategoryDto } from './dto/update-homepage-clarisa-category.dto';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Response } from 'express';
import { HomepageClarisaCategory } from './entities/homepage-clarisa-category.entity';
import { ClarisaPageOnly } from 'src/shared/decorators/clarisa-page.decorator';
import { PermissionGuard } from 'src/shared/guards/permission.guard';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';

//@ClarisaPageOnly()
//@UseGuards(JwtAuthGuard, PermissionGuard)
@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class HomepageClarisaCategoryController {
  constructor(
    private readonly homepageClarisaCategoryService: HomepageClarisaCategoryService,
  ) {}

  @Get()
  async findAll(@Query('show') show: FindAllOptions) {
    return await this.homepageClarisaCategoryService.findAll(show);
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.homepageClarisaCategoryService.findOne(id);
  }

  @Patch('update')
  async update(
    @Res() res: Response,
    @Body()
    updateHomepageClarisaCategoryDtoList: UpdateHomepageClarisaCategoryDto[],
  ) {
    try {
      const result: HomepageClarisaCategory[] =
        await this.homepageClarisaCategoryService.update(
          updateHomepageClarisaCategoryDtoList,
        );
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
