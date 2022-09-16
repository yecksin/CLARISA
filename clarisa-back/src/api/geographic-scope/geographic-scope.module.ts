import { Module } from '@nestjs/common';
import { GeographicScopeService } from './geographic-scope.service';
import { GeographicScopeController } from './geographic-scope.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeographicScope } from './entities/geographic-scope.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GeographicScope])],
  controllers: [GeographicScopeController],
  providers: [GeographicScopeService],
})
export class GeographicScopeModule {}
