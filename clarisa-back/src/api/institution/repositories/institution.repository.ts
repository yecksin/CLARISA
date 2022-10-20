import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InstitutionTypeDto } from 'src/api/institution-type/dto/institution-type.dto';
import { InstitutionType } from 'src/api/institution-type/entities/institution-type.entity';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { InstitutionCountryDto } from '../dto/institution-country.dto';
import { InstitutionDto } from '../dto/institution.dto';
import { Institution } from '../entities/institution.entity';

@Injectable()
export class InstitutionRepository extends Repository<Institution> {
  constructor(private dataSource: DataSource) {
    super(Institution, dataSource.createEntityManager());
  }

  async findAllInstitutions(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<InstitutionDto[]> {
    let institutionDtos: InstitutionDto[] = [];
    let whereClause: FindOptionsWhere<Institution> = {};
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        //do nothing. we will be showing everything, so no condition is needed;
        break;
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        whereClause = {
          is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
        };
        break;
    }

    const institution: Institution[] = await this.find({
      where: whereClause,
      relations: {
        institution_type_object: true,
        institution_locations: {
          country_object: true,
        },
      },
    });

    await Promise.all(
      institution.map(async (i) => {
        let institutionDto: InstitutionDto = new InstitutionDto();
        institutionDto.code = i.id;
        institutionDto.name = i.name;
        institutionDto.acronym = i.acronym;
        institutionDto.websiteLink = i.website_link;
        institutionDto.added = i.created_at;

        institutionDto.countryOfficeDTO = i.institution_locations.map((il) => {
          let countryDto: InstitutionCountryDto = new InstitutionCountryDto();

          countryDto.code = il.country_object.id;
          countryDto.isHeadquarter = il.is_headquater;
          countryDto.isoAlpha2 = il.country_object.iso_alpha_2;
          countryDto.name = il.country_object.name;
          countryDto.regionDTO = null;

          return countryDto;
        });

        institutionDto.institutionType = new InstitutionTypeDto();
        institutionDto.institutionType.code = `${i.institution_type_object.id}`;
        institutionDto.institutionType.name = i.institution_type_object.name;

        institutionDtos.push(institutionDto);
      }),
    );

    return institutionDtos;
  }
}
