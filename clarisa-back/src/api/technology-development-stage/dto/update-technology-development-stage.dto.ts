import { PartialType } from '@nestjs/mapped-types';
import { CreateTechnologyDevelopmentStageDto } from './create-technology-development-stage.dto';

export class UpdateTechnologyDevelopmentStageDto extends PartialType(CreateTechnologyDevelopmentStageDto) {
    id: number;
}
