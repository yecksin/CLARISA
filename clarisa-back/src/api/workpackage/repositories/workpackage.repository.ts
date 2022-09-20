import { Injectable } from '@nestjs/common';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { DataSource, Repository } from 'typeorm';
import { WorkpackageCountryDto } from '../dto/workpackage-country.dto';
import { WorkpackageRegionDto } from '../dto/workpackage-region.dto';
import { WorkpackageDto } from '../dto/workpackage.dto';
import { Workpackage } from '../entities/workpackage.entity';

@Injectable()
export class WorkpackageRepository extends Repository<Workpackage> {
  constructor(private dataSource: DataSource) {
    super(Workpackage, dataSource.createEntityManager());
  }

  async findAllWorkpackages(
    showWorkpackages: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
    showInitiatives: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<WorkpackageDto[]> {
    let where: string = '';
    switch (showWorkpackages) {
      case FindAllOptions.SHOW_ALL:
        //do nothing. we will be showing everything, so no condition is needed;
        break;
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        where = `where stwp.is_active = ${
          showWorkpackages === FindAllOptions.SHOW_ONLY_ACTIVE ? 1 : 0
        } `;
        break;
    }

    switch (showInitiatives) {
      case FindAllOptions.SHOW_ALL:
        //do nothing. we will be showing everything, so no condition is needed;
        break;
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        where += `${where ? 'and' : 'where'} stis.is_active = ${
          showInitiatives === FindAllOptions.SHOW_ONLY_ACTIVE ? 1 : 0
        }`;
        break;
    }

    const workpackageQuery: string = `
        select sti.id as initiative_id, sti.official_code as initiative_offical_code,
            stis.stage_id, stis.status as initiative_status, stwp.wp_official_code,
            stwp.id as wp_id, stwp.name, stwp.acronym, stwp.results, stwp.pathway_content,
            stwp.is_global_dimension as is_global, stwp.is_active as status
        from submission_tool_work_packages stwp 
        join submission_tool_initiative_stages stis on stwp.submission_tool_initiative_stage_id = stis.id
        join submission_tool_initiatives sti on stis.initiative_id = sti.id
        ${where}
        order by sti.id asc, stis.stage_id asc, stwp.wp_official_code asc;
    `;

    const regionQuery: string = `
        select r.id, r.name from submission_tool_work_package_regions stwpr
        join regions r on stwpr.region_id = r.id 
        where stwpr.work_package_id = ? and r.is_active = 1 and stwpr.is_active = 1
        order by r.id;
    `;

    const countryQuery: string = `
        select c.id, c.iso_alpha_2, c.name from submission_tool_work_package_countries stwpc 
        join countries c on stwpc.country_id = c.id 
        where stwpc.work_package_id = ? and c.is_active = 1 and stwpc.is_active = 1
        order by c.id;
    `;

    let workpackages: WorkpackageDto[] = await this.query(workpackageQuery);

    await Promise.all(
      workpackages.map(async (w) => {
        let workpackageCountries: WorkpackageCountryDto[] = await this.query(
          countryQuery,
          [w.wp_id],
        );
        let workpackageRegions: WorkpackageRegionDto[] = await this.query(
          regionQuery,
          [w.wp_id],
        );

        w.countries = workpackageCountries;
        w.regions = workpackageRegions;
      }),
    );

    return workpackages;
  }
}
