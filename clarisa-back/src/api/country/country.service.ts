import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Repository } from 'typeorm';
import { CountryDto } from './dto/country.dto';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';
import { CountryRepository } from './repositories/country.repository';

@Injectable()
export class CountryService {
  constructor(private countriesRepository: CountryRepository) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<Country[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.countriesRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.countriesRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async testingCountries(): Promise<CountryDto[]> {
    /*let asd = await customCountryRepository.find();
    console.log(asd);*/
    return await this.countriesRepository.findAllCountries();
  }

  async findOne(id: number): Promise<Country> {
    return await this.countriesRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  async update(updateCountryDto: UpdateCountryDto[]) {
    return await this.countriesRepository.save(updateCountryDto);
  }
}
