import { PartialType } from '@nestjs/mapped-types';
import { CreateCgiarEntityTypeDto } from './create-cgiar-entity-type.dto';

export class UpdateCgiarEntityTypeDto extends PartialType(CreateCgiarEntityTypeDto) {
    id: number;
}
