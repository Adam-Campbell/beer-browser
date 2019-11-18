import { TestBed } from '@angular/core/testing';
import { BookmarkService } from './bookmark.service';
import { mockBeer } from './mockData';

describe('BookmarkService', () => {
  let service: BookmarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(BookmarkService);
    window.localStorage.clear();
  });

  afterEach(() => {
    window.localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('hydrates bookmark data from an external data soruce', () => {
    window.localStorage.setItem('beers', JSON.stringify([mockBeer]));
    service.hydrateBookmarksData();
    service.bookmarks$.subscribe(value => expect(value).toEqual([mockBeer]));
  });

  it('adds a bookmark', () => {
    service.addBookmark(mockBeer);
    service.bookmarks$.subscribe(value => expect(value).toEqual([mockBeer]));
  });

  it('removes a bookmark', () => {
    service.addBookmark(mockBeer);
    service.removeBookmark(mockBeer.id);
    service.bookmarks$.subscribe(value => expect(value).toEqual([]));
  });

  it('correctly determines if the beer with a particular id is bookmarked', () => {
    expect(service.checkIfBookmarked(mockBeer.id)).toBe(false);
    service.addBookmark(mockBeer);
    expect(service.checkIfBookmarked(mockBeer.id)).toBe(true);
  });
  
});
