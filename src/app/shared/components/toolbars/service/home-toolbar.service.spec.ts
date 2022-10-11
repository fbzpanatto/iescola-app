import { TestBed } from '@angular/core/testing';

import { HomeToolbarService } from './home-toolbar.service';

describe('HomeToolbarService', () => {
  let service: HomeToolbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeToolbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
