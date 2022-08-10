import { PartialType } from '@nestjs/mapped-types';
import { CreateSdgTargetDto } from './create-sdg-target.dto';

export class UpdateSdgTargetDto extends PartialType(CreateSdgTargetDto) {
    id : number;
}
