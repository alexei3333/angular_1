import { Injectable } from '@angular/core';
import { ISimpleDto } from '../interfaces/common';
import { BankApplyItem, IBankApplyItem } from '../interfaces/bankApplyItem';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  constructor() {}

  private countriesTemp = [
    { id: 1, name: 'Russia' },
    { id: 2, name: 'United States' },
    { id: 3, name: 'Australia' },
    { id: 4, name: 'Canada' },
    { id: 5, name: 'Brazil' },
    { id: 6, name: 'England' },
  ];

  public get Countries(): ISimpleDto[] {
    return this.countriesTemp;
  }

  public GetBankItem(): IBankApplyItem {
    const item = new BankApplyItem(
      23,
      'Bankiros.ru',
      'https://bankiros.ru/zayavka/credit?credit_purpose_id=10'
    );
    return item;
  }
}
