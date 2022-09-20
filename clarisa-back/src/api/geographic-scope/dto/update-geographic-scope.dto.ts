import { PartialType } from '@nestjs/mapped-types';
import { CreateGeographicScopeDto } from './create-geographic-scope.dto';

export class UpdateGeographicScopeDto extends PartialType(
  CreateGeographicScopeDto,
) {
  id: number;
}
