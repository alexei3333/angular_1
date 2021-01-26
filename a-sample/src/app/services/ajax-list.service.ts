import { Inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { apiVitrinaLw } from '../helpers/constants';
import { HttpClient } from '@angular/common/http';
import { objectToQuery } from '../helpers/common';
import {
  IFetchVitrinaResponse,
  IVitrinaItemLw,
  IVitrinaTabbedCriteria,
} from '../interfaces/vitrina-t.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AjaxListService {
  baseUrl: string;
  apiVitrinaLw = apiVitrinaLw;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.API_BASE_URL;
  }

  getVitrinaItems(
    criteria: IVitrinaTabbedCriteria
  ): Observable<IFetchVitrinaResponse> {
    const query = objectToQuery(criteria);
    const fetchUrl = this.apiVitrinaLw + query;
    console.log(fetchUrl);
    const items$ = this.http.get<IFetchVitrinaResponse>(fetchUrl);
    return items$;
  }
}
