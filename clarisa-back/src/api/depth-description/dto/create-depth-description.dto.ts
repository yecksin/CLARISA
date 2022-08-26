import { AuditableDto } from "src/shared/entities/dtos/auditable-dto"; 

export class CreateDepthDescriptionDto extends AuditableDto{
    name: string;
}
