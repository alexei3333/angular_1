export interface IdDto {
  id: number | string;
}
export interface ISimpleDto extends IdDto {
  name: string;
}
export interface ISiteCriteria {
  currency: string;
  depCity: number;
  site: number; // siteEnum;
  lang: langEnum;
  countrySite?: number;
  isAgency?: boolean;
  count?: number;
}
export enum langEnum {
  RussianDefault = 0,
  NoTranslation = 1,
  Czech = 2,
  English = 3,
  Greek = 4,
  Serbian = 5,
  Bulgarian = 6,
  Ukrainian = 7,
  Latvian = 8,
  Romanian = 9,
  German = 10,
  Hungarian = 11,
  Chinese = 12,
  Polish = 13,
  Georgian = 14,
  Turkish = 15,
  Armenian = 16,
  Italian = 17,
  French = 18,
  Persian = 19,
  Arabic = 20,
  Estonian = 21,
}
