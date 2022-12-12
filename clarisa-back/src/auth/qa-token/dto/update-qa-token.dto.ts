import { PartialType } from '@nestjs/mapped-types';
import { CreateQaTokenDto } from './create-qa-token.dto';

export class UpdateQaTokenDto extends PartialType(CreateQaTokenDto) {
    id: number;
}
