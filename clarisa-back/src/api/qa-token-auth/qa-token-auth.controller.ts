import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QaTokenAuthService } from './qa-token-auth.service';
import { CreateQaTokenAuthDto } from './dto/create-qa-token-auth.dto';
import { UpdateQaTokenAuthDto } from './dto/update-qa-token-auth.dto';

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
}
