import { Inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { apiVitrinaLw } from '../helpers/constants';

@Injectable({
  providedIn: 'root',
})
export class AjaxListService {
  baseUrl: string;
  apiVitrinaLw = apiVitrinaLw;
  constructor() {
    this.baseUrl = environment.API_BASE_URL;
  }
}
