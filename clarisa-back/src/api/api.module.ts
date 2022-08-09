import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { ActionAreaModule } from './action-area/action-area.module';
import { GlossaryModule } from './glossary/glossary.module';
import { ImpactAreaModule } from './impact-area/impact-area.module';
import { GlobalTargetsModule } from './global_targets/global_targets.module';
import { StudyTypeModule } from './study-type/study-type.module';
import { SdgModule } from './sdg/sdg.module';
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
    SdgModule
  ],
})
export class ApiModule {}
