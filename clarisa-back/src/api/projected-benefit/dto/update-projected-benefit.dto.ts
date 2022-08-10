import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectedBenefitDto } from './create-projected-benefit.dto';

export class UpdateProjectedBenefitDto extends PartialType(CreateProjectedBenefitDto) {
    id: number;
}
