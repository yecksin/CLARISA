import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './entities/country.entity';
import { CountryRepository } from './repositories/country.repository';

@Module({
  controllers: [CountryController],
  providers: [CountryService, CountryRepository],
})
export class CountryModule {}
