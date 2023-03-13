import { PartialType } from '@nestjs/mapped-types';
import { CreateOldInstitutionDto } from './create-old-institution.dto';

export class UpdateOldInstitutionDto extends PartialType(
  CreateOldInstitutionDto,
) {}
