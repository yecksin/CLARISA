import { PartialType } from '@nestjs/mapped-types';
import { CreateInstitutionDictionaryDto } from './create-institution-dictionary.dto';

export class UpdateInstitutionDictionaryDto extends PartialType(
  CreateInstitutionDictionaryDto,
) {
  id: number;
}
