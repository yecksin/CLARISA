import {
  DataSource,
  FindOptionsRelations,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { Injectable } from '@nestjs/common';
import { ProjectedBenefit } from '../entities/projected-benefit.entity';
import { FindAllOptions } from '../../../shared/entities/enums/find-all-options';
import { ProjectedBenefitDto } from '../dto/projected-benefit.dto';
import { ProjectedBenefitDepthModule } from '../../projected-benefit-depth/projected-benefit-depth.module';
import { DepthDescriptionDto } from '../../depth-description/dto/depth-description.dto';
import { ProjectedBenefitWeightingDto } from '../../projected-benefit-weighting/dto/projected-benefit-weighting.dto';

@Injectable()
export class ProjectedBenefitRepository extends Repository<ProjectedBenefit> {
  private readonly _projectedBenefitRelations: FindOptionsRelations<ProjectedBenefit> =
    {
      impact_area_indicator_object: {
        impact_area_object: true,
      },
      projected_benefit_depth_array: {
        depth_description_object: true,
      },
      projected_benefit_weighting_array: {
        weight_description_object: true,
      },
    };

  constructor(private dataSource: DataSource) {
    super(ProjectedBenefit, dataSource.createEntityManager());
  }

  async findAllProjectedBenefits(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<ProjectedBenefitDto[]> {
    let projectedBenefitDtos: ProjectedBenefitDto[] = [];
    let whereClause: FindOptionsWhere<ProjectedBenefit> = {};
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

    const projectedBenefits: ProjectedBenefit[] = await this.find({
      where: whereClause,
      relations: this._projectedBenefitRelations,
    });

    projectedBenefitDtos = await Promise.all(
      projectedBenefits.map(async (pb) => {
        const projectedBenefitDto: ProjectedBenefitDto =
          new ProjectedBenefitDto();

        if (pb.impact_area_indicator_object) {
          projectedBenefitDto.impactAreaIndicator =
            pb.impact_area_indicator_object.id;
          projectedBenefitDto.impactAreaIndicatorName =
            pb.impact_area_indicator_object.indicator_statement;
          projectedBenefitDto.isApplicableProjectedBenefits =
            pb.impact_area_indicator_object.is_aplicable_projected_benefits;
          projectedBenefitDto.targetYear =
            pb.impact_area_indicator_object.target_year;
          projectedBenefitDto.targetUnit =
            pb.impact_area_indicator_object.target_unit;
          projectedBenefitDto.value =
            pb.impact_area_indicator_object.target_value;

          if (pb.impact_area_indicator_object.impact_area_object) {
            projectedBenefitDto.impactAreaId =
              pb.impact_area_indicator_object.impact_area_object.id;
            projectedBenefitDto.impactAreaName =
              pb.impact_area_indicator_object.impact_area_object.name;
          }
        }

        projectedBenefitDto.depthScales = (
          pb.projected_benefit_depth_array ?? []
        )
          .map((ds) => {
            if (!ds.depth_description_object) {
              return undefined;
            }

            const depthScale: DepthDescriptionDto = new DepthDescriptionDto();

            depthScale.depthScaleId = ds.depth_description_object.id;
            depthScale.depthScaleName = ds.depth_description_object.name;

            return depthScale;
          })
          .filter((ds) => ds);

        projectedBenefitDto.weightingValues = (
          pb.projected_benefit_weighting_array ?? []
        )
          .map((wa) => {
            if (!wa.weight_description_object) {
              return undefined;
            }

            const weighting: ProjectedBenefitWeightingDto =
              new ProjectedBenefitWeightingDto();

            weighting.descriptionID = wa.weight_description_object.id;
            weighting.description = wa.weight_description_object.description;
            weighting.weightValue = wa.weight_value;

            return weighting;
          })
          .filter((wa) => wa);

        return projectedBenefitDto;
      }),
    );

    return projectedBenefitDtos;
  }
}
