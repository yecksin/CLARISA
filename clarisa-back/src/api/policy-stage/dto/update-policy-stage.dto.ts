import { PartialType } from '@nestjs/mapped-types';
import { CreatePolicyStageDto } from './create-policy-stage.dto';

export class UpdatePolicyStageDto extends PartialType(CreatePolicyStageDto) {
  id: number;
}
