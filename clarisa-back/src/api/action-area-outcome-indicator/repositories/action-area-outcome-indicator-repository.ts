import { dataSource } from 'src/ormconfig';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { ActionAreaOutcomeIndicatorRequestDto } from '../dto/action-area-outcome-indicator-request.dto';
import { ActionAreaOutcomeIndicator } from '../entities/action-area-outcome-indicator.entity';

export  const actionAreaOutcomeIndicatorRequest = dataSource.getRepository(ActionAreaOutcomeIndicator).extend(
  {
    async actionAreaOutcomeIndicatorByAll(): Promise<ActionAreaOutcomeIndicatorRequestDto[]> {
    
      const impactAreaIndicatorsQuery = `
        SELECT aa.id AS 'actionAreaId', aa.name AS 'actionAreaName', aao.id AS 'outcomeId', 
					aao.smo_code AS 'outcomeSMOcode', aao.outcome_statement AS 'outcomeStatement', 
						oi.id AS 'outcomeIndicatorId', oi.smo_code AS 'outcomeIndicatorsSMOcode', oi.outcome_indicator_statement AS 'outcomeIndicatorStatement'
	        FROM action_area_outcome_indicators aai
        LEFT JOIN action_area_outcomes aao 
	        ON aai.action_area_outcome_id = aao.id
        LEFT JOIN  action_areas aa
	        ON aai.action_area_id = aa.id
        LEFT JOIN outcome_indicators oi
	        ON  aai.outcome_indicator_id = oi.id;
              `;
        
      const ImpactAreaIndicatorsbyImpactArea :ActionAreaOutcomeIndicatorRequestDto[]  = await this.query(impactAreaIndicatorsQuery);
      
      return ImpactAreaIndicatorsbyImpactArea;
    },

    async actionAreaOutcomeIndicatorByAllIsActive(option : FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE): Promise<ActionAreaOutcomeIndicatorRequestDto[]> {
      var isActiveOption = true;
      if (option == 'inactive' ) isActiveOption = false;

      const impactAreaIndicatorsQuery = `
      SELECT aa.id AS 'actionAreaId', aa.name AS 'actionAreaName', aao.id AS 'outcomeId', 
					aao.smo_code AS 'outcomeSMOcode', aao.outcome_statement AS 'outcomeStatement', 
						oi.id AS 'outcomeIndicatorId', oi.smo_code AS 'outcomeIndicatorsSMOcode',
                            oi.outcome_indicator_statement AS 'outcomeIndicatorStatement'
	        FROM action_area_outcome_indicators aai
        LEFT JOIN action_area_outcomes aao 
	        ON aai.action_area_outcome_id = aao.id
        LEFT JOIN  action_areas aa
	        ON aai.action_area_id = aa.id
        LEFT JOIN outcome_indicators oi
	        ON  aai.outcome_indicator_id = oi.id
          WHERE aai.is_active = ${isActiveOption}
              `;
        
      const ImpactAreaIndicatorsbyImpactArea :ActionAreaOutcomeIndicatorRequestDto[]  = await this.query(impactAreaIndicatorsQuery);
      
      return ImpactAreaIndicatorsbyImpactArea;
    }
  }
);
