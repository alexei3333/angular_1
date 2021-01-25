export interface IBankApplyItem {
  id: number;
  title: string;
  url: string;
  isReady: boolean;
  statusWork: string;
  countryId?: number;
}

export class BankApplyItem implements IBankApplyItem {
  constructor(
    public id: number,
    public title: string,
    public url: string,
    public isReady: boolean = false,
    public statusWork: string = '0', // statusWorkEnum = statusWorkEnum.New,
    public countryId?: number
  ) {}
}

export enum statusWorkEnum {
  New,
  InProgress,
  Rejected,
  Approved,
}
