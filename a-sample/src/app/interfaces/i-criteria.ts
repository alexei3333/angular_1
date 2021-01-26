import { langEnum, siteEnum } from "../index";

export interface ISiteCriteria {
  currency: string;
  depCity: number;
  site: siteEnum;
  lang: langEnum;
  countrySite?: number;
  isAgency?: boolean;
  count?: number;
}
