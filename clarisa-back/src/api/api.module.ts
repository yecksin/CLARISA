import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { ActionAreaModule } from './action-area/action-area.module';
import { GlossaryModule } from './glossary/glossary.module';
import { ImpactAreaModule } from './impact-area/impact-area.module';
import { GlobalTargetsModule } from './global-targets/global-targets.module';
import { StudyTypeModule } from './study-type/study-type.module';
import { SdgModule } from './sdg/sdg.module';
import { SdgTargetModule } from './sdg-target/sdg-target.module';
import { ImpactAreaIndicatorsModule } from './impact-area-indicators/impact-area-indicators.module';
import { ProjectedBenefitProbabilityModule } from './projected-benefit-probability/projected-benefit-probability.module';
import { ProjectedBenefitModule } from './projected-benefit/projected-benefit.module';
import { ActionAreaOutcomeModule } from './action-area-outcome/action-area-outcome.module';
import { OutcomeIndicatorModule } from './outcome-indicator/outcome-indicator.module';
import { ActionAreaOutcomeIndicatorModule } from './action-area-outcome-indicator/action-area-outcome-indicator.module';
import { SourcesModule } from './sources/sources.module';
import { GeopositionModule } from './geoposition/geoposition.module';
import { RegionTypeModule } from './region-type/region-type.module';
import { RegionModule } from './region/region.module';
import { CountryModule } from './country/country.module';
@Module({
  controllers: [ApiController],
  providers: [ApiService],
  imports: [
    UserModule, 
    RoleModule, 
    ActionAreaModule, 
    GlossaryModule,
    ImpactAreaModule,
    GlobalTargetsModule,
    StudyTypeModule,
    SdgModule,
    SdgTargetModule,
    ImpactAreaIndicatorsModule,
    ProjectedBenefitProbabilityModule,
    ProjectedBenefitModule,
    ActionAreaOutcomeModule,
    OutcomeIndicatorModule,
    ActionAreaOutcomeIndicatorModule,
    SourcesModule,
    CountryModule,
    GeopositionModule,
    RegionTypeModule,
    RegionModule
  ],
})
export class ApiModule {}
