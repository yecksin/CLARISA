import { AuditableEntity } from "src/shared/entities/extends/auditable-entity.entity";

export class CreateProjectedBenefitWeightingDto extends AuditableEntity {

    projected_benefits_id: number;

    weight_description_id: number;

    weight_value: string;
}
