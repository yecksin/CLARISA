import { Injectable } from '@nestjs/common';
import { CountryDto } from 'src/api/country/dto/country.dto';
import { Country } from 'src/api/country/entities/country.entity';
import { InstitutionTypeDto } from 'src/api/institution-type/dto/institution-type.dto';
import { InstitutionCountryDto } from 'src/api/institution/dto/institution-country.dto';
import { InstitutionDto } from 'src/api/institution/dto/institution.dto';
import { Institution } from 'src/api/institution/entities/institution.entity';
import { ParentRegionDto } from 'src/api/region/dto/parent-region.dto';
import { SimpleRegionDto } from 'src/api/region/dto/simple-region.dto';
import { Region } from 'src/api/region/entities/region.entity';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { MisOption } from 'src/shared/entities/enums/mises-options';
import { RegionTypeEnum } from 'src/shared/entities/enums/region-types';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { PartnerRequestDto } from '../dto/partner-request.dto';
import { PartnerRequest } from '../entities/partner-request.entity';

@Injectable()
export class PartnerRequestRepository extends Repository<PartnerRequest> {
  constructor(private dataSource: DataSource) {
    super(PartnerRequest, dataSource.createEntityManager());
  }

  async findAllPartnerRequests(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
    mis: string = MisOption.ALL.path,
  ): Promise<PartnerRequestDto[]> {
    const partnerRequestDtos: PartnerRequestDto[] = [];
    let whereClause: FindOptionsWhere<PartnerRequest> = {};
    const incomingMis = MisOption.getfromPath(mis);

    switch (mis) {
      case MisOption.ALL.path:
        // do nothing. no extra conditions needed
        break;
      case MisOption.AICCRA.path:
      case MisOption.CGSPACE.path:
      case MisOption.CLARISA.path:
      case MisOption.ECONTRACTS.path:
      case MisOption.FORESIGHT.path:
      case MisOption.MEL.path:
      case MisOption.OST.path:
      case MisOption.TOC.path:
        whereClause = {
          ...whereClause,
          mis_id: incomingMis.mis_id,
        };
        break;
      default:
        throw Error('?!');
    }

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

    const partnerRequest: PartnerRequest[] = await this.find({
      where: whereClause,
      relations: {
        country_object: {
          regions: {
            parent_object: true,
          },
        },
        institution_type_object: true,
        institution_object: {
          institution_type_object: true,
          institution_locations: {
            country_object: {
              regions: {
                parent_object: true,
              },
            },
          },
        },
      },
    });

    await Promise.all(
      partnerRequest.map(async (pr) => {
        const partnerRequestDto: PartnerRequestDto = new PartnerRequestDto();
        partnerRequestDto.id = pr.id;
        partnerRequestDto.partnerName = pr.partner_name;
        partnerRequestDto.acronym = pr.acronym;
        partnerRequestDto.webPage = pr.web_page;
        partnerRequestDto.requestStatus = this.getRequestStatus(pr.accepted);
        partnerRequestDto.requestJustification = pr.reject_justification;
        partnerRequestDto.requestSource = pr.request_source;
        partnerRequestDto.externalUserMail = pr.external_user_mail;
        partnerRequestDto.externalUserName = pr.external_user_name;
        partnerRequestDto.externalUserComments = pr.external_user_comments;

        partnerRequestDto.countryDTO = this.fillOutCountryInfo(
          pr.country_object,
        );

        partnerRequestDto.institutionTypeDTO = new InstitutionTypeDto();
        partnerRequestDto.institutionTypeDTO.code = `${pr.institution_type_object.id}`;
        partnerRequestDto.institutionTypeDTO.name =
          pr.institution_type_object.name;

        partnerRequestDto.institutionDTO = this.fillOutInstitutionInfo(
          pr.institution_object,
        );

        partnerRequestDtos.push(partnerRequestDto);
      }),
    );

    return partnerRequestDtos;
  }

  private getRequestStatus(accepted: boolean | undefined): string {
    // this did not work for some odd reason in TS; in JS it works just fine
    //return (accepted === undefined ? 'Pending' : (accepted ? 'Accepted', 'Rejected'));
    if (accepted === undefined) {
      return 'Pending';
    }

    return accepted ? 'Accepted' : 'Rejected';
  }

  private fillOutCountryInfo(country: Country): CountryDto {
    const countryDto = new CountryDto();

    countryDto.code = country.id;
    countryDto.isoAlpha2 = country.iso_alpha_2;
    countryDto.isoAlpha3 = country.iso_alpha_3;
    countryDto.name = country.name;

    countryDto.regionDTO = this.fillOutRegionInfo(country.regions);

    return countryDto;
  }

  private fillOutRegionInfo(regions: Region[]): SimpleRegionDto {
    const region: Region = regions.find(
      (r) => r.region_type_id === RegionTypeEnum.CGIAR_REGION,
    );
    const regionDto = new SimpleRegionDto();

    regionDto.name = region.name;
    regionDto.um49Code = region.iso_numeric;

    if (regionDto.parentRegion) {
      regionDto.parentRegion = new ParentRegionDto();
      regionDto.parentRegion.name = region.parent_object.name;
      regionDto.parentRegion.um49Code = region.parent_object.iso_numeric;
    }

    return regionDto;
  }

  fillOutInstitutionInfo(institution: Institution): InstitutionDto {
    const institutionDto: InstitutionDto = new InstitutionDto();

    institutionDto.code = institution.id;
    institutionDto.name = institution.name;
    institutionDto.acronym = institution.acronym;
    institutionDto.websiteLink = institution.website_link;
    institutionDto.added = institution.created_at;

    institutionDto.countryOfficeDTO = institution.institution_locations.map(
      (il) => {
        const countryDto: InstitutionCountryDto = new InstitutionCountryDto();

        countryDto.code = il.country_object.id;
        countryDto.isHeadquarter = il.is_headquater;
        countryDto.isoAlpha2 = il.country_object.iso_alpha_2;
        countryDto.name = il.country_object.name;
        countryDto.regionDTO = null;

        return countryDto;
      },
    );

    institutionDto.institutionType = new InstitutionTypeDto();
    institutionDto.institutionType.code = `${institution.institution_type_object.id}`;
    institutionDto.institutionType.name =
      institution.institution_type_object.name;

    return institutionDto;
  }
}
