import { ImpactAreaIndicator } from '../entities/impact-area-indicator.entity';
import { ImpactAreaIndicatorDto } from '../dto/impact-area-indicator.dto';
import { Injectable } from '@nestjs/common';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { FindAllOptions } from '../../../shared/entities/enums/find-all-options';

@Injectable()
export class ImpactAreaIndicatorRepository extends Repository<ImpactAreaIndicator> {
  constructor(private dataSource: DataSource) {
    super(ImpactAreaIndicator, dataSource.createEntityManager());
  }
  async findAllImpactAreaIndicators(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<ImpactAreaIndicatorDto[]> {
    const impactAreaIndicatorDtos: ImpactAreaIndicatorDto[] = [];
    let whereClause: FindOptionsWhere<ImpactAreaIndicator> = {};
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        //do nothing. we will be showing everything, so no condition is needed;
        break;
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        whereClause = {
          auditableFields: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
          impact_area_object: {
            auditableFields: {
              is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
            },
          },
        };
        break;
    }

    const impactAreaIndicators: ImpactAreaIndicator[] = await this.find({
      where: whereClause,
      relations: {
        impact_area_object: true,
      },
    });

    await Promise.all(
      impactAreaIndicators.map(async (iai) => {
        const impactAreaIndicatorDto: ImpactAreaIndicatorDto =
          new ImpactAreaIndicatorDto();

        if (iai.impact_area_object) {
          impactAreaIndicatorDto.impactAreaId = iai.impact_areas_id;
          impactAreaIndicatorDto.impactAreaName = iai.impact_area_object.name;
        }

        impactAreaIndicatorDto.indicatorId = iai.id;
        impactAreaIndicatorDto.indicatorStatement = iai.indicator_statement;
        impactAreaIndicatorDto.isAplicableProjectedBenefits =
          iai.is_aplicable_projected_benefits;
        impactAreaIndicatorDto.targetUnit = iai.target_unit;
        impactAreaIndicatorDto.targetYear = iai.target_year;
        impactAreaIndicatorDto.value = iai.target_value;

        impactAreaIndicatorDtos.push(impactAreaIndicatorDto);
      }),
    );

    return impactAreaIndicatorDtos;
  }
}
