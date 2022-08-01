export class CreateUserDto {
    
  first_name: string;
  
  last_name: string;

  username: string;

  email: string;

  password: string;

  is_cgiar_user: boolean;

  created_by: number;

  active_since: Date;

  modified_by: number;
  
  modification_justification: string;

  is_active: boolean;

  last_login: Date;

  auto_save: boolean;

  agree_terms: boolean;
}
