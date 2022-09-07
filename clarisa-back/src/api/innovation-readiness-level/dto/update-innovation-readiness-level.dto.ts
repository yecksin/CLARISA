import { PartialType } from '@nestjs/mapped-types';
import { CreateInnovationReadinessLevelDto } from './create-innovation-readiness-level.dto';

export class UpdateInnovationReadinessLevelDto extends PartialType(
  CreateInnovationReadinessLevelDto,
) {
  id: number;
}
