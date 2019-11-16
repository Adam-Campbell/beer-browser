import { TestBed } from '@angular/core/testing';

import { BookmarkService } from './bookmark.service';

xdescribe('BookmarkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookmarkService = TestBed.get(BookmarkService);
    expect(service).toBeTruthy();
  });
});
