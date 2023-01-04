import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { QaTokenService } from './qa-token.service';
import { CreateQaTokenDto } from './dto/create-qa-token.dto';
import { UpdateQaTokenDto } from './dto/update-qa-token.dto';
import { JwtAuthGuard } from '../../shared/guards/jwt-auth.guard';
import { PermissionGuard } from '../../shared/guards/permission.guard';

@Controller()
export class QaTokenController {
  constructor(private readonly qaTokenService: QaTokenService) {}

  @Post('api/qa-token')
  @UseGuards(JwtAuthGuard, PermissionGuard)
  create(@Body() createQaTokenDto: CreateQaTokenDto) {
    if (
      createQaTokenDto.name == '' ||
      createQaTokenDto.appUser == '' ||
      createQaTokenDto.email == '' ||
      createQaTokenDto.misAcronym == '' ||
      createQaTokenDto.username == ''
    ) {
      return {
        Error: 'All fields are required',
        ErrorNumber: '400 Bad request',
      };
    }
    if (this.isEmail(createQaTokenDto.email) == false) {
      return {
        Error: 'The email is not valid',
        ErrorNumber: '400 Bad request',
      };
    }
    if(createQaTokenDto.misAcronym.toLowerCase() == 'prms' && createQaTokenDto.official_code == ''){
      return {
        Error: 'The official code is required',
        ErrorNumber: '400 Bad request',
      };
    }

    return this.qaTokenService.create(createQaTokenDto);
  }

  isEmail(email: string) {
    let checkEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (checkEmail.test(email)) {
      return true;
    } else {
      return false;
    }
  }
}
