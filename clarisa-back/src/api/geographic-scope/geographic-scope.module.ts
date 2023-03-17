import { Module } from '@nestjs/common';
import { GeographicScopeService } from './geographic-scope.service';
import { GeographicScopeController } from './geographic-scope.controller';
import { GeographicScopeRepository } from './repositories/geographic-scope.repository';

@Module({
  controllers: [GeographicScopeController],
  providers: [GeographicScopeService, GeographicScopeRepository],
})
export class GeographicScopeModule {}
