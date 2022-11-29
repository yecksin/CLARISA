export class InstitutionTypeDto {
  code: string;
  name: string;
  parent?: InstitutionTypeDto;
  id_parent?: number;
}
