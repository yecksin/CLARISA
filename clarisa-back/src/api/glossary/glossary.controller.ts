import { Controller, Get, Post, Body, Patch, Param, Delete,
  HttpException,
  HttpStatus,
  Res,
  Query, 
  ParseIntPipe,
  ParseBoolPipe} from '@nestjs/common';
import { GlossaryService } from './glossary.service';
import { CreateGlossaryDto } from './dto/create-glossary.dto';
import { UpdateGlossaryDto } from './dto/update-glossary.dto';
import { Glossary } from './entities/glossary.entity';
import { Response } from 'express';

@Controller()
export class GlossaryController {
  constructor(private readonly glossaryService: GlossaryService) {}


  @Get()
  findAll(@Query() {active} : { active:boolean}) {
    return this.glossaryService.findAll(active);
  }

  @Get('findById/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.glossaryService.findOne(id);
  }

  @Patch('update')
  async update(@Res() res: Response, @Body() updateGlossaryDto: UpdateGlossaryDto[]) {
    try {
      const result : Glossary[] = await this.glossaryService.update(updateGlossaryDto);
      return res.status(HttpStatus.OK).json(result);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

}
