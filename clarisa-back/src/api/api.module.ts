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
    ImpactAreaIndicatorsModule
  ],
})
export class ApiModule {}
