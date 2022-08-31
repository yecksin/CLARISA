import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkpackageService } from './workpackage.service';
import { CreateWorkpackageDto } from './dto/create-workpackage.dto';
import { UpdateWorkpackageDto } from './dto/update-workpackage.dto';

@Controller('workpackage')
export class WorkpackageController {
  constructor(private readonly workpackageService: WorkpackageService) {}

  @Post()
  create(@Body() createWorkpackageDto: CreateWorkpackageDto) {
    return this.workpackageService.create(createWorkpackageDto);
  }

  @Get()
  findAll() {
    return this.workpackageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workpackageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkpackageDto: UpdateWorkpackageDto) {
    return this.workpackageService.update(+id, updateWorkpackageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workpackageService.remove(+id);
  }
}
