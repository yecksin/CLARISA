import { Injectable } from '@nestjs/common';
import { CreateGlossaryDto } from './dto/create-glossary.dto';
import { UpdateGlossaryDto } from './dto/update-glossary.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Glossary } from './entities/glossary.entity';
@Injectable()
export class GlossaryService {
  constructor(
    @InjectRepository(Glossary)
    private glossaryRepository: Repository<Glossary>,
  ) {}

  findAll(active: boolean = true) {
    return this.glossaryRepository.find({
      where: {
        ...({is_active: active}),
      }
    });
  }


  findOne(id: number) {
    return this.glossaryRepository.findOneBy({id});
  }

  async update(updateGlossary: UpdateGlossaryDto[]) : Promise<Glossary[]> {
    return await this.glossaryRepository.save(updateGlossary);
  }

  async getRolesPagination(offset?: number, limit: number = 10) {
    const [items, count] = await this.glossaryRepository.findAndCount({
      order: {
        id: 'ASC'
      },
      skip: offset,
      take: limit
    });
   
    return {
      items,
      count
    }
  }
}
