import { WorkpackageCountryDto } from "./workpackage-country.dto";
import { WorkpackageRegionDto } from "./workpackage-region.dto";

export class WorkpackageDto{
    initiative_id: number;
    initiative_offical_code: string;
    stage_id: number;
    initiative_status: string;
    wp_official_code: string;
    wp_id: number;
    name: string;
    acronym: string;
    results: string;
    pathway_content: string;
    is_global: number;
    regions: WorkpackageRegionDto[];
    countries: WorkpackageCountryDto[];
    status: number;
}