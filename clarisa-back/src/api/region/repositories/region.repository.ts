import { Injectable } from '@nestjs/common';
import { ParentRegionDto } from 'src/api/region/dto/parent-region.dto';
import { RegionDto } from 'src/api/region/dto/region.dto';
import { Region } from 'src/api/region/entities/region.entity';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { RegionTypeEnum } from 'src/shared/entities/enums/region-types';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';

@Injectable()
export class RegionRepository extends Repository<Region> {
  constructor(private dataSource: DataSource) {
    super(Region, dataSource.createEntityManager());
  }

  async findRegionsByType(
    regionType: RegionTypeEnum,
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE
    ): Promise<RegionDto[]> {
    let whereClause : FindOptionsWhere<Region> = {
        region_type_id: regionType
    }
    switch(option){
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        whereClause = {
            ...whereClause,
            is_active : option === FindAllOptions.SHOW_ONLY_ACTIVE
        }
    }
    let regions: Region[] = await this.find({where:whereClause});
    let regionDtos: RegionDto[] = [];

    await Promise.all(regions.map(async (r) => {
      let parentRegion : Region = await this.query(`
        select r.* from regions r
        where r.id = ?;
      `, [r.parent_id]);
      parentRegion = ((<unknown>parentRegion) as Region[]).length === 1 ? parentRegion[0] : undefined;
      
      let regionDto: RegionDto = null;
      let parentRegionDto: ParentRegionDto = null;

      if(parentRegion){
        parentRegionDto = new ParentRegionDto()
        parentRegionDto.name = parentRegion.name;
        parentRegionDto.um49Code = parentRegion.iso_numeric;
      }

      regionDto = new RegionDto();
      regionDto.name = r.name;
      regionDto.um49Code = r.iso_numeric;
      regionDto.parentRegion = parentRegionDto;

      regionDtos.push(regionDto);
    }));

    return regionDtos;
  }
}
