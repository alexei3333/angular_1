import { Inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AjaxListService {
  baseUrl: string;
  constructor() {
    this.baseUrl = environment.API_BASE_URL;
  }
}
