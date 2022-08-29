import { Inject, Injectable } from '@nestjs/common';
import { ParentRegionDto } from 'src/api/region/dto/parent-region.dto';
import { RegionDto } from 'src/api/region/dto/region.dto';
import { Region } from 'src/api/region/entities/region.entity';
import { dataSource } from 'src/ormconfig';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, Repository } from 'typeorm';
import { CountryDto } from '../dto/country.dto';
import { Country } from '../entities/country.entity';

@Injectable()
export class CountryRepository extends Repository<Country> {
  constructor(private dataSource: DataSource) {
    super(Country, dataSource.createEntityManager());
  }

  async findAllCountries(
      option: FindAllOptions
    ): Promise<CountryDto[]> {
    let countries: Country[] = await this.find(option !== FindAllOptions.SHOW_ALL ? {
      where: {
        is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
      },
    } : undefined);
    let countryDtos: CountryDto[] = [];

    await Promise.all(countries.map(async (c) => {
      let region : Region = await this.query(`
        select r.* from regions r
        join country_regions cr on cr.region_id = r.id
        join countries c on cr.country_id = c.id
        where c.id = ? and r.region_type_id = 2;
      `, [c.id]);
      region = ((<unknown>region) as Region[]).length === 1 ? region[0] : undefined;

      let parentRegion : Region = await this.query(`
        select r.* from regions r
        where r.id = ?;
      `, [(region?.parent_id)??0]);
      parentRegion = ((<unknown>parentRegion) as Region[]).length === 1 ? parentRegion[0] : undefined;
      
      let countryDto: CountryDto = new CountryDto();
      let regionDto: RegionDto = null;
      let parentRegionDto: ParentRegionDto = null;

      if(region){
        if(parentRegion){
          parentRegionDto = new ParentRegionDto()
          parentRegionDto.name = parentRegion.name;
          parentRegionDto.um49Code = parentRegion.iso_numeric;
        }

        regionDto = new RegionDto();
        regionDto.name = region.name;
        regionDto.um49Code = region.iso_numeric;
        regionDto.parentRegion = parentRegionDto;
      }

      countryDto.code = c.iso_numeric;
      countryDto.isoAlpha2 = c.iso_alpha_2;
      countryDto.isoAlpha3 = c.iso_alpha_3;
      countryDto.name = c.name;
      countryDto.regionDTO = regionDto;

      countryDtos.push(countryDto);
    }));

    return countryDtos;
  }
}
