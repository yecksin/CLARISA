export class InstitutionTypeDto {
  code: string;
  name: string;
  parent?: InstitutionTypeDto;
  legacy?: boolean;
}
