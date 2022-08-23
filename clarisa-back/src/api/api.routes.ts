import { ActionAreaModule } from './action-area/action-area.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { GlossaryModule } from './glossary/glossary.module';
import { GlobalTargetsModule } from './global-targets/global-targets.module';
import { ImpactAreaModule } from './impact-area/impact-area.module';
import { StudyTypeModule } from './study-type/study-type.module';
import { SdgModule } from './sdg/sdg.module';
import { SdgTargetModule } from './sdg-target/sdg-target.module';
import { ImpactAreaIndicatorsModule } from './impact-area-indicators/impact-area-indicators.module';
import { ProjectedBenefitProbabilityModule } from './projected-benefit-probability/projected-benefit-probability.module';
import { ProjectedBenefitModule } from './projected-benefit/projected-benefit.module';
import { ActionAreaOutcomeModule } from './action-area-outcome/action-area-outcome.module';
import { OutcomeIndicatorModule } from './outcome-indicator/outcome-indicator.module';
import { ActionAreaOutcomeIndicatorModule } from './action-area-outcome-indicator/action-area-outcome-indicator.module';
import { CountryModule } from './country/country.module';
import { GeopositionModule } from './geoposition/geoposition.module';

export const apiRoutes = [
  {
    path: 'users',
    module: UserModule,
  },
  {
    path: 'roles',
    module: RoleModule,
  },
  {
    path: 'action-areas',
    module: ActionAreaModule,
  },
  {
    path: 'impact-areas',
    module: ImpactAreaModule,
  },
  {
    path: 'glossary',
    module: GlossaryModule,
  },
  {
    path: 'global-targets',
    module: GlobalTargetsModule,
  },
  {
    path: 'study-types',
    module: StudyTypeModule,
  },
  {
    path: 'sdgs',
    module: SdgModule,
  },
  {
    path: 'sdg-targets',
    module: SdgTargetModule,
  },
  {
    path: 'impact-area-indicators',
    module: ImpactAreaIndicatorsModule,
  },
  {
    path: 'projected-benefit-probabilities',
    module: ProjectedBenefitProbabilityModule,
  },
  {
    path: 'projected-benefits',
    module: ProjectedBenefitModule,
  },
  {
    path: 'action-area-outcomes',
    module: ActionAreaOutcomeModule,
  },
  {
    path: 'outcome-indicators',
    module: OutcomeIndicatorModule,
  },
  {
    path: 'action-area-outcome-indicators',
    module: ActionAreaOutcomeIndicatorModule,
  },
  {
    path: 'countries',
    module: CountryModule,
  },
  {
    path: 'geopositions',
    module: GeopositionModule,
  },
];
