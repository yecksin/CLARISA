import { dataSource } from 'src/ormconfig';
import { ImpactAreaIndicator } from '../entities/impact-area-indicator.entity';
import { ImpactAreaIndicatorByImpactAreaDto } from '../dto/impact-area-indicators-by-impact-are.dto';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';

export  const impactAreRepository = dataSource.getRepository(ImpactAreaIndicator).extend(
  {
    async impactAreaIndicatorsByImpactArea(): Promise<ImpactAreaIndicatorByImpactAreaDto[]> {
    
      const impactAreaIndicatorsQuery = `
      SELECT iai.id, iai.indicator_statement, iai.target_year, iai.target_unit, 
              iai.is_aplicable_projected_benefits, iai.smo_code, ia.id AS impact_area_id, ia.name
        FROM impact_areas_indicators iai
   LEFT JOIN impact_areas ia
          ON iai.impact_areas_id = ia.id
              `;
        
      const ImpactAreaIndicatorsbyImpactArea :ImpactAreaIndicatorByImpactAreaDto[]  = await this.query(impactAreaIndicatorsQuery);
      
      return ImpactAreaIndicatorsbyImpactArea;
    },

    async impactAreaIndicatorsByImpactAreaIsActive(option : FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE): Promise<ImpactAreaIndicatorByImpactAreaDto[]> {
      var isAtiveOption = true;
      if (option == 'inactive' ) isAtiveOption = false;

      const impactAreaIndicatorsQuery = `
      SELECT iai.id, iai.indicator_statement, iai.target_year, iai.target_unit, 
              iai.is_aplicable_projected_benefits, iai.smo_code, ia.id AS impact_area_id, ia.name
        FROM impact_areas_indicators iai
   LEFT JOIN impact_areas ia
          ON iai.impact_areas_id = ia.id
          WHERE iai.is_active = ${isAtiveOption}
              `;
        
      const ImpactAreaIndicatorsbyImpactArea :ImpactAreaIndicatorByImpactAreaDto[]  = await this.query(impactAreaIndicatorsQuery);
      
      return ImpactAreaIndicatorsbyImpactArea;
    }
  }
);
