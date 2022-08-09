import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { ActionAreaModule } from './action-area/action-area.module';
import { GlossaryModule } from './glossary/glossary.module';
import { ImpactAreaModule } from './impact-area/impact-area.module';
@Module({
  controllers: [ApiController],
  providers: [ApiService],
  imports: [
    UserModule, 
    RoleModule, 
    ActionAreaModule, 
    GlossaryModule,
    ImpactAreaModule
  ],
})
export class ApiModule {}
