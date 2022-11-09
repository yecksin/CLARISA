export class InstitutionTypeFromParentDto {
  code: string;
  name: string;
  children: InstitutionTypeFromParentDto[];
}
