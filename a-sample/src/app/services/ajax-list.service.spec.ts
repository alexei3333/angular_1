import { TestBed } from '@angular/core/testing';

import { AjaxListService } from './ajax-list.service';

describe('AjaxListService', () => {
  let service: AjaxListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjaxListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
