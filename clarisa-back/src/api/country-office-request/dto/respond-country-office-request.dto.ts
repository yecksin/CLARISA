import { IsEmail, IsNotEmpty, Min, ValidateIf } from 'class-validator';

export class RespondCountryOfficeRequestDto {
  @Min(1)
  countryOfficeRequestId: number;

  @Min(1)
  userId: number;

  @IsNotEmpty()
  accept: boolean;

  misAcronym: string;

  @ValidateIf((o) => !o.accept)
  @IsNotEmpty()
  rejectJustification: string;

  @IsEmail()
  externalUserMail: string;

  externalUserName: string;

  externalUserComments: string;
}
