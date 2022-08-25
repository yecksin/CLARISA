import { Inject, Injectable } from '@nestjs/common';
import { ParentRegionDto } from 'src/api/region/dto/parent-region.dto';
import { RegionDto } from 'src/api/region/dto/region.dto';
import { Region } from 'src/api/region/entities/region.entity';
import { dataSource } from 'src/ormconfig';
import { DataSource, Repository } from 'typeorm';
import { CountryDto } from '../dto/country.dto';
import { Country } from '../entities/country.entity';

@Injectable()
export class CountryRepository extends Repository<Country> {
  constructor(private dataSource: DataSource) {
    super(Country, dataSource.createEntityManager());
  }

  async findAllCountries(): Promise<CountryDto[]> {
    let countries: Country[] = await this.find();
    let countryDtos: CountryDto[];
    countries.forEach((c) => {
      console.log(c);
      let countryDto: CountryDto = new CountryDto();

      let region: Region = c.regions
        .filter((r) => r.region_type_id === 1)
        .pop();
      let regionDto: RegionDto = new RegionDto();

      let parentRegionDto: ParentRegionDto = new ParentRegionDto();

      parentRegionDto.name = region.parent_object.name;
      parentRegionDto.um49Code = region.parent_object.iso_numeric;

      regionDto.name = region.name;
      regionDto.um49Code = region.iso_numeric;
      regionDto.parentRegion = parentRegionDto;

      countryDto.code = c.iso_numeric;
      countryDto.isoAlpha2 = c.iso_alpha_2;
      countryDto.isoAlpha3 = c.iso_alpha_3;
      countryDto.name = c.name;
      countryDto.regionDTO = regionDto;
    });

    return countryDtos;
  }
}
