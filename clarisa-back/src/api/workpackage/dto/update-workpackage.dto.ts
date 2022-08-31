import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkpackageDto } from './create-workpackage.dto';

export class UpdateWorkpackageDto extends PartialType(CreateWorkpackageDto) {}
