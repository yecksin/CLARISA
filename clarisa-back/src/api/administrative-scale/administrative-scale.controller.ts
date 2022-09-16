import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Redirect,
  HttpStatus,
} from '@nestjs/common';

@Controller()
export class AdministrativeScaleController {
  constructor() {}

  @Get('/')
  @Redirect('geographic-scopes?type=one-cgiar', HttpStatus.MOVED_PERMANENTLY)
  getAll() {
    // nothing, we are just going to redirect
  }
}
