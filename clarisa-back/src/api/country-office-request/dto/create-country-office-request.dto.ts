import { IsEmail, IsNotEmpty, Min } from 'class-validator';

export class CreateCountryOfficeRequestDto {
  @Min(1)
  institutionCode: number;

  @IsNotEmpty({ each: true })
  countryIso: string[];

  requestSource?: string;

  @IsNotEmpty()
  misAcronym: string;

  @Min(1)
  userId: number;

  @IsEmail()
  externalUserMail: string;

  externalUserName: string;

  externalUserComments: string;
}
