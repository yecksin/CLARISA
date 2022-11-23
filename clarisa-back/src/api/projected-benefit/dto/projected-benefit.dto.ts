import { DepthDescriptionDto } from '../../depth-description/dto/depth-description.dto';
import { ProjectedBenefitWeightingDto } from '../../projected-benefit-weighting/dto/projected-benefit-weighting.dto';

export class ProjectedBenefitDto {
  impactAreaId: number;
  impactAreaName: string;
  impactAreaIndicator: number;
  impactAreaIndicatorName: string;
  isApplicableProjectedBenefits: boolean;
  targetYear: number;
  targetUnit: string;
  value: string;
  depthScales: DepthDescriptionDto[];
  weightingValues: ProjectedBenefitWeightingDto[];
}
