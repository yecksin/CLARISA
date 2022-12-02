export class InstitutionTypeDto {
  code: number;
  name: string;
  parent?: InstitutionTypeDto;
  legacy?: boolean;
  id_parent?: number;
}
