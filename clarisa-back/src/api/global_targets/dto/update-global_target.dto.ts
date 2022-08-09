import { PartialType } from '@nestjs/mapped-types';
import { CreateGlobalTargetDto } from './create-global_target.dto';

export class UpdateGlobalTargetDto extends PartialType(CreateGlobalTargetDto) {
    id : number;
}
