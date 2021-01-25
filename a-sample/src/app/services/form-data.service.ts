import { Injectable } from '@angular/core';
import { ISimpleDto } from '../interfaces/common';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor() { }

  private countriesTemp = [
    {id: 1, name: 'Russia'},
    {id: 2, name: 'United States'},
    {id: 3, name: 'Australia'},
    {id: 4, name: 'Canada'},
    {id: 5, name: 'Brazil'},
    {id: 6, name: 'England'}
  ];

  public get Countries(): ISimpleDto[]
  {
        return this.countriesTemp;
  }

}
