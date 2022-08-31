import { Injectable } from '@nestjs/common';
import { CreateWorkpackageDto } from './dto/create-workpackage.dto';
import { UpdateWorkpackageDto } from './dto/update-workpackage.dto';

@Injectable()
export class WorkpackageService {
  create(createWorkpackageDto: CreateWorkpackageDto) {
    return 'This action adds a new workpackage';
  }

  findAll() {
    return `This action returns all workpackage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workpackage`;
  }

  update(id: number, updateWorkpackageDto: UpdateWorkpackageDto) {
    return `This action updates a #${id} workpackage`;
  }

  remove(id: number) {
    return `This action removes a #${id} workpackage`;
  }
}
