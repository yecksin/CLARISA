import { OmitType } from '@nestjs/mapped-types';
import { IsNotEmpty, Min } from 'class-validator';
import { CreateCountryOfficeRequestDto } from './create-country-office-request.dto';

export class UpdateCountryOfficeRequestDto extends OmitType(
  CreateCountryOfficeRequestDto,
  ['countryIso'],
) {
  @Min(1)
  id: number;

  @IsNotEmpty()
  modification_justification: string;

  countryIso: string;
}
