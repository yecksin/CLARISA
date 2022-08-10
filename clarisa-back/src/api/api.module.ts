import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { ActionAreaModule } from './action-area/action-area.module';
import { GlossaryModule } from './glossary/glossary.module';
import { GlobalTargetsModule } from './global-targets/global-targets.module';

@Module({
  controllers: [ApiController],
  providers: [ApiService],
  imports: [UserModule, RoleModule, ActionAreaModule, GlossaryModule, GlobalTargetsModule],
})
export class ApiModule {}
