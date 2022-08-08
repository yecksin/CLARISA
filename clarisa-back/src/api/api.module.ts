import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { GlossaryModule } from './glossary/glossary.module';


@Module({
  controllers: [ApiController],
  providers: [ApiService],
  imports: [UserModule, RoleModule, GlossaryModule],
})
export class ApiModule {}
