import { CountryDto } from '../../country/dto/country.dto';
import { InstitutionTypeDto } from '../../institution-type/dto/institution-type.dto';
import { InstitutionDto } from '../../institution/dto/institution.dto';

export class PartnerRequestDto {
  id: number;
  partnerName: string;
  acronym: string;
  webPage: string;
  requestStatus: string;
  requestJustification: string;
  requestSource?: string;
  externalUserMail: string;
  externalUserName: string;
  externalUserComments: string;
  countryDTO: CountryDto;
  institutionTypeDTO: InstitutionTypeDto;
  institutionDTO: InstitutionDto;
}
