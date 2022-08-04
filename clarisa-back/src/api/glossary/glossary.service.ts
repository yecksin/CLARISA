import { Injectable } from '@nestjs/common';
import { CreateGlossaryDto } from './dto/create-glossary.dto';
import { UpdateGlossaryDto } from './dto/update-glossary.dto';

@Injectable()
export class GlossaryService {
  create(createGlossaryDto: CreateGlossaryDto) {
    return 'This action adds a new glossary';
  }

  findAll() {
    return `This action returns all glossary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} glossary`;
  }

  update(id: number, updateGlossaryDto: UpdateGlossaryDto) {
    return `This action updates a #${id} glossary`;
  }

  remove(id: number) {
    return `This action removes a #${id} glossary`;
  }
}
