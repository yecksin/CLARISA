import { PartialType } from '@nestjs/mapped-types';
import { CreateQaTokenAuthDto } from './create-qa-token-auth.dto';

export class UpdateQaTokenAuthDto extends PartialType(CreateQaTokenAuthDto) {}
