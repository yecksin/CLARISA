import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { QaTokenAuthService } from './qa-token-auth.service';
import { CreateQaTokenAuthDto } from './dto/create-qa-token-auth.dto';
import { JwtAuthGuard } from '../../shared/guards/jwt-auth.guard';
import { PermissionGuard } from '../../shared/guards/permission.guard';

@Controller()
export class QaTokenAuthController {
  constructor(private readonly qaTokenAuthService: QaTokenAuthService) {}

  @Get()
  findAll() {
    return this.qaTokenAuthService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.qaTokenAuthService.findOne(+id);
  }

  @Post('api/qa-token')
  @UseGuards(JwtAuthGuard, PermissionGuard)
  create(@Body() createQaTokenDto: CreateQaTokenAuthDto) {
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
    if (
      createQaTokenDto.misAcronym.toLowerCase() == 'prms' &&
      createQaTokenDto.official_code == ''
    ) {
      return {
        Error: 'The official code is required',
        ErrorNumber: '400 Bad request',
      };
    }

    return this.qaTokenAuthService.create(createQaTokenDto);
  }

  isEmail(email: string) {
    const checkEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (checkEmail.test(email)) {
      return true;
    } else {
      return false;
    }
  }
}
