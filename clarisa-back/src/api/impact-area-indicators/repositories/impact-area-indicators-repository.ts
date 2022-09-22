import { dataSource } from 'src/ormconfig';
import { ImpactAreaIndicator } from '../entities/impact-area-indicator.entity';
import { ImpactAreaIndicatorByImpactAreaDto } from '../dto/impact-area-indicators-by-impact-are.dto';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ImpactAreaIndicatorRepository extends Repository<ImpactAreaIndicator> {
  constructor(private dataSource: DataSource) {
    super(ImpactAreaIndicator, dataSource.createEntityManager());
  }
  async impactAreaIndicatorsByImpactArea(): Promise<
    ImpactAreaIndicatorByImpactAreaDto[]
  > {
    const impactAreaIndicatorsQuery = `
      SELECT iai.id, iai.indicator_statement, iai.target_year, iai.target_unit, 
              iai.is_aplicable_projected_benefits, iai.smo_code, ia.id AS impact_area_id, ia.name
        FROM impact_area_indicators iai
   LEFT JOIN impact_areas ia
          ON iai.impact_areas_id = ia.id
              `;

    const ImpactAreaIndicatorsbyImpactArea: ImpactAreaIndicatorByImpactAreaDto[] =
      await this.query(impactAreaIndicatorsQuery);

    return ImpactAreaIndicatorsbyImpactArea;
  }

  async impactAreaIndicatorsByImpactAreaIsActive(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<ImpactAreaIndicatorByImpactAreaDto[]> {
    var isActiveOption = true;
    if (option == 'inactive') isActiveOption = false;

    const impactAreaIndicatorsQuery = `
      SELECT iai.id, iai.indicator_statement, iai.target_year, iai.target_unit, 
              iai.is_aplicable_projected_benefits, iai.smo_code, ia.id AS impact_area_id, ia.name
        FROM impact_area_indicators iai
   LEFT JOIN impact_areas ia
          ON iai.impact_areas_id = ia.id
          WHERE iai.is_active = ${isActiveOption}
              `;

    const ImpactAreaIndicatorsbyImpactArea: ImpactAreaIndicatorByImpactAreaDto[] =
      await this.query(impactAreaIndicatorsQuery);

    return ImpactAreaIndicatorsbyImpactArea;
  }
}