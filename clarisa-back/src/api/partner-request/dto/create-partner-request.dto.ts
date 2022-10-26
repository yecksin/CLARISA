export class CreatePartnerRequestDto {
  name: string;
  acronym: string;
  institutionTypeCode: string;
  hqCountryIso: string;
  websiteLink: string;
  requestSource?: string;
  externalUserMail: string;
  externalUserName: string;
  externalUserComments: string;
}
