export class CreateUserDto {
    
  first_name: string;
  
  last_name: string;

  username: string;

  email: string;

  password: string;

  is_cgiar_user: boolean;

  last_login: Date;

  agree_terms: boolean;

  created_at: Date;
  
  updated_at: Date;

  is_active: boolean;
}
