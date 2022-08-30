import { PartialType } from '@nestjs/mapped-types';
import { CreateGovernanceTypeDto } from './create-governance-type.dto';

export class UpdateGovernanceTypeDto extends PartialType(CreateGovernanceTypeDto) {
    id: number;
}
