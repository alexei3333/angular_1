import { TestBed } from '@angular/core/testing';

import { ShadowParserService } from './shadow-parser.service';

describe('ShadowParserService', () => {
  let service: ShadowParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShadowParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
