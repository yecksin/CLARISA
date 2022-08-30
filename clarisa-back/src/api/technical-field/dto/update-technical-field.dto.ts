import { PartialType } from '@nestjs/mapped-types';
import { CreateTechnicalFieldDto } from './create-technical-field.dto';

export class UpdateTechnicalFieldDto extends PartialType(CreateTechnicalFieldDto) {
    id: number;
}
