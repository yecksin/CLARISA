import { AuditableDto } from "src/shared/entities/dtos/auditable-dto";

export class CreateBusinessCategoryDto extends AuditableDto {
    name: string;
}
