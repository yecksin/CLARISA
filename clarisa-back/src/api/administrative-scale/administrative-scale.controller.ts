import { Controller, Get, Redirect, HttpStatus } from '@nestjs/common';

@Controller()
export class AdministrativeScaleController {
  @Get('/')
  @Redirect('geographic-scopes?type=one-cgiar', HttpStatus.MOVED_PERMANENTLY)
  getAll() {
    // nothing, we are just going to redirect
  }
}
