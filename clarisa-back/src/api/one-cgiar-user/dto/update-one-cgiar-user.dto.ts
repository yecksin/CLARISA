import { PartialType } from '@nestjs/mapped-types';
import { CreateOneCgiarUserDto } from './create-one-cgiar-user.dto';

export class UpdateOneCgiarUserDto extends PartialType(CreateOneCgiarUserDto) {
    id: number;
}
