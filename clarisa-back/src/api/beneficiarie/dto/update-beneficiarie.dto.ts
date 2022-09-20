import { PartialType } from '@nestjs/mapped-types';
import { CreateBeneficiarieDto } from './create-beneficiarie.dto';

export class UpdateBeneficiarieDto extends PartialType(CreateBeneficiarieDto) {
  id: number;
}
