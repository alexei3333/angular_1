import { ISiteCriteria } from './common';
import { IAjaxModel } from './i-ajax-models';
import { IAjaxResponse, IAjaxResponseTyped } from './i-ajax-response';
import { ISimpleDtoLw, IIdName, IIdTitleLw } from './i-simple-dtos';

export interface IFetchVitrinaResponse extends IAjaxResponse {
  //regions: IVitrinaRegionLw[];
  hasOffers?: boolean;
  hasBestPrices?: boolean;
  hasPromotions?: boolean;
  items?: IVitrinaItemLw[];
}

export interface IFetchCountryResponse
  extends IAjaxResponseTyped<ISimpleDtoLw> {}

export interface IVitrinaInitialDataCriteria extends ISiteCriteria {
  countryId: number;
  regionId: number;
}

export enum vitrinaModeEnum {
  notSet = 0,
  countryMode = 1,
  regionMode = 2,
  singleRegionMode = 3,
}
export enum vitrinaItemTypeEnum {
  all = 0,
  hotelOffers = 1,
  bestPrices = 2,
  agencyOffers = 3,
}

export enum vitrinaOpenStateEnum {
  first = 0,
  second = 1,
  third = 2,
}

export interface IVitrinaTabbedLists {
  countries: IIdName[];
  regions: IIdName[];
}
export interface IVitrinaTabbedFilter {
  countryId: number;
  regionId: number;
  filterId: vitrinaItemTypeEnum;
}

export interface IVitrinaTabbedCriteria
  extends ISiteCriteria,
    IVitrinaTabbedFilter {}

export interface IVitrinaItemLw {
  id: number;
  hotelTitleOffer: string;
  hotelStarsCss: string;
  link: string;
  bookingDateFromOffer: string;
  bookingDateToOffer: string;
  dateFromOffer: string;
  dateToOffer: string;
  offerDescription: string;
  offerTitleTruncated: string;
  picturePath: string;
  resultPriceHalfComputed: string;
  footer: string;
  decorNameTruncated: string;
  regionHotel: string;
  departureTitle: string;
  isOffer: boolean;
  isAgencyOffer: boolean;
  offersCount: number;
}
export interface IVitrinaRegionLw extends IIdTitleLw {
  countryId: number;
  cnt: number;
}

export interface IVitrinaReducer extends IAjaxModel {
  modeOpen: vitrinaOpenStateEnum;
  hasOffers?: boolean;
  hasBestPrices?: boolean;
  hasPromotions?: boolean;
  filter: IVitrinaTabbedFilter;
  items: IVitrinaItemLw[];
  itemsPromotions: any[]; // IAgencyItemPromotion[];
  tabItems: ISimpleDtoLw[];
  tabsInitialized: boolean;
}
