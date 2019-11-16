import { TestBed } from '@angular/core/testing';

import { DataFetcherService } from './data-fetcher.service';

xdescribe('DataFetcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataFetcherService = TestBed.get(DataFetcherService);
    expect(service).toBeTruthy();
  });
});
