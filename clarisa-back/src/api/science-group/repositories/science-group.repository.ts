import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { ScienceGroupDto } from '../dto/science-group.dto';
import { ScienceGroup } from '../entities/science-group.entity';

@Injectable()
export class ScienceGroupRepository extends Repository<ScienceGroup> {
  constructor(private dataSource: DataSource) {
    super(ScienceGroup, dataSource.createEntityManager());
  }

  async findAllScienceGroups(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<ScienceGroupDto[]> {
    let whereClause: FindOptionsWhere<ScienceGroup> = {};
    let scienceGroupDtos: ScienceGroupDto[] = [];
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        //do nothing. we will be showing everything, so no condition is needed;
        break;
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        whereClause = {
          is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
        };
        break;
    }

    const scienceGroups: ScienceGroup[] = await this.find({
      where: whereClause,
    });

    await Promise.all(
      scienceGroups.map(async (sc) => {
        let scienceGroupDto: ScienceGroupDto = new ScienceGroupDto();
        scienceGroupDto.code = String(sc.id);
        scienceGroupDto.description = sc.description;
        scienceGroupDto.financialCode = sc.financial_code;
        scienceGroupDto.parent = sc.parent_id
          ? await this.createQueryBuilder('sc')
              .select('sc.id', 'code')
              .addSelect('sc.description', 'description')
              .where('sc.id = :scienceCodeId', { scienceCodeId: sc.parent_id })
              .getRawOne()
          : null;

        scienceGroupDtos.push(scienceGroupDto);
      }),
    );

    return scienceGroupDtos;
  }
}