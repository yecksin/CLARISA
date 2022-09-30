import { EndpointDto } from './endpoint.dto';

export class CategoryEndpointDto {
  id: number;
  name: string;
  description: string;
  subcategories: CategoryEndpointDto[];
  endpoints: EndpointDto[];
}
