import { IsNotEmpty, Min } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreatePartnerRequestDto } from './create-partner-request.dto';

export class UpdatePartnerRequestDto extends PartialType(
  CreatePartnerRequestDto,
) {
  @Min(1)
  id: number;

  @IsNotEmpty()
  modification_justification: string;
}
