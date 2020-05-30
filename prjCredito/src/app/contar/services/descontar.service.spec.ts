import { TestBed } from '@angular/core/testing';

import { DescontarService } from './descontar.service';

describe('DescontarService', () => {
  let service: DescontarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescontarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
