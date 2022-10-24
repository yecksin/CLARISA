import { Controller, Get, HttpStatus, Redirect } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller()
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get()
  findAll() {
    return this.apiService.findAll();
  }

  /*
    NOTE: the following exposed endpoints have been added in order
    to mantain compatibility with systems that have not changed
    to the new endpoints
  */

  @Get('un-regions')
  @Redirect('regions/un-regions', HttpStatus.MOVED_PERMANENTLY)
  getUNRegions() {
    // nothing, we are just going to redirect
  }

  @Get('OneCGIARRegions')
  @Redirect('regions/one-cgiar-regions', HttpStatus.MOVED_PERMANENTLY)
  getOneCGIARRegions() {
    // nothing, we are just going to redirect
  }

  @Get('institutionsSimpleRelated')
  @Redirect('institution-dictionary', HttpStatus.MOVED_PERMANENTLY)
  getInstitutionDictionary() {
    // nothing, we are just going to redirect
  }

  @Get('allSDG')
  @Redirect('sdgs', HttpStatus.MOVED_PERMANENTLY)
  getSDGs() {
    // nothing, we are just going to redirect
  }

  @Get('allSDGTargets')
  @Redirect('sdg-targets', HttpStatus.MOVED_PERMANENTLY)
  getSDGTargets() {
    // nothing, we are just going to redirect
  }

  @Get('allSDGIndicators')
  @Redirect('sdg-indicators', HttpStatus.MOVED_PERMANENTLY)
  getSDGTIndicators() {
    // nothing, we are just going to redirect
  }

  @Get('allInitiatives')
  @Redirect('initiatives', HttpStatus.MOVED_PERMANENTLY)
  getInitiatives() {
    // nothing, we are just going to redirect
  }

  @Get('actionAreaOutcomes')
  @Redirect('action-area-outcomes', HttpStatus.MOVED_PERMANENTLY)
  getActionAreaOutcomes() {
    // nothing, we are just going to redirect
  }

  @Get('actionAreaOutcomeIndicators')
  @Redirect('action-area-outcome-indicators', HttpStatus.MOVED_PERMANENTLY)
  getActionAreaOutcomeIndicators() {
    // nothing, we are just going to redirect
  }

  // FIXME find how to do this redirect, as Postman identifies this
  // as a redirect loop
  /*@Get('MELIA/study-types')
  @Redirect('study-types', HttpStatus.MOVED_PERMANENTLY)
  getStudyTypes() {
    // nothing, we are just going to redirect
  }*/

  @Get('type-of-innovations')
  @Redirect('innovation-types', HttpStatus.MOVED_PERMANENTLY)
  getInnovationTypes() {
    // nothing, we are just going to redirect
  }

  // FIXME find how to do this redirect, as this endpoint already
  // exist
  /*@Get('user')
  @Redirect('oc-users', HttpStatus.MOVED_PERMANENTLY)
  getOneCGIARUsers() {
    // nothing, we are just going to redirect
  }*/

  @Get('onecgiar-entities')
  @Redirect('cgiar-entities', HttpStatus.MOVED_PERMANENTLY)
  getCGIAREntities() {
    // nothing, we are just going to redirect
  }

  @Get('accountTypes')
  @Redirect('account-types', HttpStatus.MOVED_PERMANENTLY)
  getAccountTypes() {
    // nothing, we are just going to redirect
  }

  @Get('scienceGroups')
  @Redirect('science-groups', HttpStatus.MOVED_PERMANENTLY)
  getScienceGroups() {
    // nothing, we are just going to redirect
  }
}
