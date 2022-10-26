import { Injectable } from '@nestjs/common';
import { InstitutionDictionaryDto } from 'src/api/institution-dictionary/dto/institution-dictionary.dto';
import { InstitutionSourceDto } from 'src/api/institution-dictionary/dto/institution-source.dto';
import { InstitutionTypeDto } from 'src/api/institution-type/dto/institution-type.dto';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { InstitutionCountryDto } from '../dto/institution-country.dto';
import { InstitutionDto } from '../dto/institution.dto';
import { InstitutionLocation } from '../entities/institution-location.entity';
import { Institution } from '../entities/institution.entity';

@Injectable()
export class InstitutionRepository extends Repository<Institution> {
  constructor(private dataSource: DataSource) {
    super(Institution, dataSource.createEntityManager());
  }

  async findAllInstitutions(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<InstitutionDto[]> {
    const institutionDtos: InstitutionDto[] = [];
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
        const institutionDto: InstitutionDto = new InstitutionDto();
        institutionDto.code = i.id;
        institutionDto.name = i.name;
        institutionDto.acronym = i.acronym;
        institutionDto.websiteLink = i.website_link;
        institutionDto.added = i.created_at;

        institutionDto.countryOfficeDTO = i.institution_locations.map((il) => {
          const countryDto: InstitutionCountryDto = new InstitutionCountryDto();

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

  async findAllInstitutionSourceEntries(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<InstitutionDictionaryDto[]> {
    const institutionDictionaryDtos: InstitutionDictionaryDto[] = [];
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
        institution_dictionary_entries: {
          source_object: true,
        },
      },
    });

    await Promise.all(
      institution.map(async (i) => {
        const institutionDictionaryDto: InstitutionDictionaryDto =
          new InstitutionDictionaryDto();

        institutionDictionaryDto.code = i.id;
        institutionDictionaryDto.name = i.name;
        institutionDictionaryDto.acronym = i.acronym;
        institutionDictionaryDto.websiteLink = i.website_link;
        institutionDictionaryDto.institutionType =
          i.institution_type_object.name;
        institutionDictionaryDto.institutionTypeId =
          i.institution_type_object.id;

        const hq: InstitutionLocation = i.institution_locations.find(
          (il) => il.is_headquater,
        );
        institutionDictionaryDto.hqLocation = hq.country_object.name;
        institutionDictionaryDto.hqLocationISOalpha2 =
          hq.country_object.iso_alpha_2;

        institutionDictionaryDto.institutionRelatedList =
          i.institution_dictionary_entries
            .map((id) => {
              const institution_dictionary_dto: InstitutionSourceDto =
                new InstitutionSourceDto();

              institution_dictionary_dto.institutionCode =
                id.institution_source_id;
              institution_dictionary_dto.institutionName =
                id.institution_source_name;
              institution_dictionary_dto.source = id.source_object.name;

              return institution_dictionary_dto;
            })
            .sort((id1, id2) =>
              id1.institutionCode.localeCompare(id2.institutionCode),
            );

        institutionDictionaryDtos.push(institutionDictionaryDto);
      }),
    );

    return institutionDictionaryDtos;
  }
}
