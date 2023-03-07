import { Injectable } from '@nestjs/common';
import { UpdateGlossaryDto } from './dto/update-glossary.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsOrder, FindOptionsWhere, Repository } from 'typeorm';
import { Glossary } from './entities/glossary.entity';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { GlossaryRepository } from './repositories/glossary.repository';
@Injectable()
export class GlossaryService {
  constructor(private glossaryRepository: GlossaryRepository) {}

  findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
    onlyDashboard: boolean = false,
  ): Promise<Glossary[]> {
    let whereClause: FindOptionsWhere<Glossary> = {};
    let orderClause: FindOptionsOrder<Glossary> = {
      title: 'ASC',
    };

    if (onlyDashboard) {
      whereClause = {
        ...whereClause,
        show_in_dashboard: true,
      };
    }

    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return this.glossaryRepository.find({
          where: whereClause,
          order: orderClause,
        });
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        whereClause = {
          ...whereClause,
          is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
        };
        return this.glossaryRepository.find({
          where: whereClause,
          order: orderClause,
        });
      default:
        throw Error('?!');
    }
  }

  findOne(id: number) {
    return this.glossaryRepository.findOneBy({ id });
  }

  async update(updateGlossary: UpdateGlossaryDto[]): Promise<Glossary[]> {
    return await this.glossaryRepository.save(updateGlossary);
  }

  async getRolesPagination(offset?: number, limit = 10) {
    const [items, count] = await this.glossaryRepository.findAndCount({
      order: {
        id: 'ASC',
      },
      skip: offset,
      take: limit,
    });

    return {
      items,
      count,
    };
  }
}
