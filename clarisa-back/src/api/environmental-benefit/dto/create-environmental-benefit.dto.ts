import { AuditableDto } from "src/shared/entities/dtos/auditable-dto";

export class CreateEnvironmentalBenefitDto extends AuditableDto {
    name: string;
}
