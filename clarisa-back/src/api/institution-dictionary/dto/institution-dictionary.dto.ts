import { InstitutionSourceDto } from './institution-source.dto';

export class InstitutionDictionaryDto {
  code: number;
  name: string;
  acronym: string;
  websiteLink: string;
  institutionTypeId: number;
  institutionType: string;
  hqLocation: string;
  hqLocationISOalpha2: string;
  institutionRelatedList: InstitutionSourceDto[];
}
