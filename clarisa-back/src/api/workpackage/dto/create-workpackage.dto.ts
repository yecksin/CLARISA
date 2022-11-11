import { AuditableDto } from '../../../shared/entities/dtos/auditable-dto';

export class CreateWorkpackageDto extends AuditableDto {
  name: string;

  results: string;

  pathway_content: string;

  is_global_dimension: boolean;

  submission_tool_initiative_stage_id: number;

  acronym: string;

  wp_official_code: number;
}
