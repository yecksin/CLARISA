import { PartialType } from '@nestjs/mapped-types';
import { CreateCountryOfficeRequestDto } from './create-country-office-request.dto';

export class UpdateCountryOfficeRequestDto extends PartialType(
  CreateCountryOfficeRequestDto,
) {
  id: number;
}
